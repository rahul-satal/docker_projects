
# Base Image

FROM alpine


# Additional packages
## Download and install dependency

RUN apk add --update redis

RUN apk add --update gcc

# Startup command

CMD ["redis-server"]