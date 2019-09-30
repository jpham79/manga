# FROM ubuntu:latest
FROM alpine:3.9
RUN apk upgrade --update &&\
    apk add mongodb
RUN mkdir /data
VOLUME [ "/data/db" ]
WORKDIR /data
EXPOSE 27017
# CMD ["/bin/sh"]
CMD ["mongod", "--bind_ip", "0.0.0.0"]