#!/bin/sh

###
### Script to rebuild the db, server, and client containers
###

# remove the old containers, if any
docker compose down

# build and run the containers
docker compose up --build -d

# see whats up
docker ps -a