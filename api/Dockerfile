# Initial Instalation setup
FROM --platform=linux/amd64 ubuntu:latest

# SETUP DIRECTORY
WORKDIR /project
ADD . /project

# Update
RUN apt update && apt -y upgrade

# Install dependency tools
RUN apt install -y python3-pip
RUN apt install -y libpq-dev

# Install Python Dependencies
RUN pip install -r requirements.txt

# RUN API
RUN chmod +x run.sh
EXPOSE 8080
CMD ./run.sh