# FROM ubuntu:latest
FROM alpine:3.9
RUN apk upgrade --update &&\
    apk add mongodb

VOLUME /data/db
EXPOSE 27017
# CMD ["/bin/sh"]
# CMD ["mongod"]
CMD ["mongod", "--bind_ip", "0.0.0.0"]