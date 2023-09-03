FROM tiangolo/uvicorn-gunicorn-fastapi

WORKDIR /app

COPY ./yolov5/requirements.txt .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./ .
