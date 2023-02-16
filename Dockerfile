FROM golang:1.16.4-alpine3.13

RUN apk update && apk add git && apk add bash

RUN mkdir /go/src/charnel-horse

WORKDIR /go/src/charnel-horse

ADD . /go/src/charnel-horse
