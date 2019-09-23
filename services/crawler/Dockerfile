# FROM ubuntu:latest
FROM python:3.7-alpine3.9
RUN apk add --no-cache --virtual .build-deps g++ python3-dev libxml2-dev libxslt-dev libffi-dev openssl-dev && \
    # apk add --no-cache --update python3 && \
    pip3 install --upgrade pip setuptools
RUN mkdir /app
COPY ./app/bot.py /app
COPY ./app/requirements.txt /app

WORKDIR /app

RUN pip install -r requirements.txt

# CMD ["python3", "bot.py" ]

