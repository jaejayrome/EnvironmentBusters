FROM tiangolo/uvicorn-gunicorn-fastapi

WORKDIR /app

COPY ./requirements.txt .

RUN apt-get update && apt-get install -y libgl1-mesa-glx

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./ .

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "80"]
