FROM alpine:3.9

LABEL maintainer="leonardo peixoto <leonardodelimapeixoto@gmail.com>"

ENV ASTERISK_VERSION=16

RUN apk add --update \
    asterisk \
    wget

VOLUME /var/lib/asterisk/sounds /var/lib/asterisk/keys /var/lib/asterisk/phoneprov /var/spool/asterisk /var/log/asterisk

EXPOSE 5060/udp 5060/tcp