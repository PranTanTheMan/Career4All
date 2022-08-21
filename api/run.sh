#!/bin/sh
[ -z "${PORT}" ] && PORT=8080
uvicorn --host 0.0.0.0 --port $PORT main:app