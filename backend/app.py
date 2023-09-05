from typing import List
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import json
import base64
import os
import subprocess
import uuid
from image_handler import decode_file, encode_file
import ultralytics

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Image(BaseModel):
    encoded_string_list: List[str]

@app.get("/")
def test_check(): 
    return "Hello World"

@app.get("/prediction")
def send_prediction(uuid: str) -> json: 
    encoded_list = encode_file(uuid)
    return json.dumps(encoded_list)

@app.post("/image")
def receive_image(body: Image) -> None:
    try: 
        # decode and save the image first 
        transaction_uuid = uuid.uuid4()
        decode_file(encoded_string_list=body.encoded_string_list, uuid=str(transaction_uuid))
        # run the images through the model
        # source path passed in is with respect to docker working directory
        source_path = f"./input/{str(transaction_uuid)}"
        run_yolov8_detection(source_path=source_path, uuid = str(transaction_uuid))
    except Exception as e: 
        raise HTTPException(status_code = "501", detail = str(e))


def run_yolov5_detection(source_path: str, uuid: str):
    weights_path = "./best.pt"
    output_path = f"exp_{uuid}"
    
    command = f"python yolov5/detect.py --weights {weights_path} --source {source_path}"
    
    try:
        print(command)
        subprocess.run(command, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        print("Error running YOLOv5 detection:", e)
    except Exception as e:
        print("An error occurred:", e)

def run_yolov8_detection(source_path: str, uuid: str):
    model_path = "./yolov8_trained.pt"
    output_path = f"./output/exp_{uuid}"

    command = f"yolo task=detect mode=predict model={model_path} conf=0.25 source={source_path} save=True project={output_path} "
    try:
        print(command)
        subprocess.run(command, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        print("Error running YOLOv8 detection:", e)
    except Exception as e:
        print("An error occurred:", e)