FROM python:3.8 
ENV PYTHONUNBUFFERED 1
WORKDIR /code 
COPY requirements.txt /code/ 
RUN --mount=type=cache,target=/root/.cache \
    pip install -r requirements.txt 
COPY . /code/
EXPOSE 5050
