from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
import base64
import os

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