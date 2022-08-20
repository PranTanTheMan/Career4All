#!/bin/sh
[ -z "${PORT}" ] && PORT=5000
uvicorn --host 0.0.0.0 --port $PORT main:app