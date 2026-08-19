FROM quay.io/ukhomeofficedigital/hof-nodejs:24.19.0-alpine3.24@sha256:a70b2f29d55a9aebcf89690e7f64f4889725dab87a3b22663d102ca17c5f888e
USER root

# Update packages as a result of Anchore security vulnerability checks
RUN apk update && \
    apk add --upgrade gnutls binutils nodejs npm apk-tools libjpeg-turbo libcurl libx11 libxml2


# Setup nodejs group & nodejs user
RUN addgroup --system nodejs --gid 998 && \
    adduser --system nodejs --uid 999 --home /app/ && \
    chown -R 999:998 /app/

USER 999

WORKDIR /app
