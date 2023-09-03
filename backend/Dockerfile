FROM tiangolo/uvicorn-gunicorn-fastapi

WORKDIR /app

COPY ./yolov5/requirements.txt .

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./ .

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "80"]
