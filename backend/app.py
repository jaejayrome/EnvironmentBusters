from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import base64
import os
import subprocess

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def test_check(): 
    return "Hello World"

# encode to json64 again
@app.get("/prediction")
def send_prediction(prediction_classification: str) -> json: 
    return {'prediction': prediction_classification}

@app.post("/image/{imageID}")
def receive_image(imageID: str, imageExtension: str) -> None:
    if not os.path.exists("img"):
        os.makedirs("img")
    decoded_bytes = base64.b64decode(imageID)

    image_path = os.path.join("img", f"output_image.{imageExtension}")

    with open(image_path, "wb") as image_file:
        image_file.write(decoded_bytes)


def run_yolov5_detection(source_path: str):
    weights_path = "../best.pt"
    
    # Navigate to the YOLOv5 folder
    os.chdir(yolov5)
    
    command = f"python detect.py --weights {weights_path} --source {source_path}"
    
    try:
        subprocess.run(command, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        print("Error running YOLOv5 detection:", e)
    except Exception as e:
        print("An error occurred:", e)
