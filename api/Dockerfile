# Initial Instalation setup
FROM ubuntu:latest

# SETUP DIRECTORY
WORKDIR /project
ADD . /project

# Update
RUN apt update && apt -y upgrade

# Install dependency tools
RUN apt install -y python3-pip
RUN apt install -y libpq-dev
RUN apt install -y curl

# Install CockroachDB And setup credentials
RUN curl https://binaries.cockroachdb.com/cockroach-v22.1.5.linux-amd64.tgz | tar -xz && cp -i cockroach-v22.1.5.linux-amd64/cockroach /usr/local/bin/

# Install Python Dependencies
RUN pip install -r requirements.txt

# Add permission for credentials and execute
RUN chmod +x cockroach_credentials.sh
RUN ./cockroach_credentials.sh

# RUN API
EXPOSE 5000
CMD ./run.sh