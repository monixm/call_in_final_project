FROM ubuntu:16.04

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get install -qqy \
    wget \
    bzip2 \
    libssl-dev \
    openssh-server \
    nodejs \
    npm

RUN apt-get autoremove -y

# SSH Server
RUN mkdir /var/run/sshd
RUN echo 'root:screencast' | chpasswd
RUN sed -i '/PermitRootLogin/c\PermitRootLogin yes' /etc/ssh/sshd_config

# SSH login fix. Otherwise user is kicked off after login
RUN sed 's@session\s*required\s*pam_loginuid.so@session optional pam_loginuid.so@g' -i /etc/pam.d/sshd

ENV NOTVISIBLE "in users profile"
RUN echo "export VISIBLE=now" >> /etc/profile

# Install miniconda
RUN echo 'export PATH=/opt/miniconda/bin:$PATH' > /etc/profile.d/conda.sh && \
    wget --quiet https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda.sh && \
    /bin/bash ~/miniconda.sh -b -p /opt/miniconda && \
    rm ~/miniconda.sh

# NodeJS
RUN npm install -g n
RUN n 9.11.1

RUN mkdir -p /backend | \
    mkdir -p /frontend | \
    mkdir -p /scripts | \
    mkdir -p /media-files | \
    mkdir -p /static-files | \
    mkdir -p /nginx

COPY ./nginx/default.conf /etc/nginx/conf.d

COPY ./backend/requirements.yml /backend/requirements.yml

RUN /opt/miniconda/bin/conda env create -f /backend/requirements.yml

ENV PATH /opt/miniconda/bin:$PATH
ENV PATH /opt/miniconda/envs/backend/bin:$PATH

WORKDIR /frontend
COPY ./frontend/package.json /frontend/
RUN npm install
COPY ./frontend /frontend
RUN npm run build

COPY ./backend /backend
COPY ./scripts /scripts
RUN chmod +x /scripts/*


WORKDIR /backend
