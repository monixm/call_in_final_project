#!/bin/bash
rm -rf /frontend-build/*
cp -r /frontend/build/* /frontend-build
python manage.py collectstatic --noinput
python manage.py migrate
/opt/miniconda/envs/backend/bin/gunicorn -w 4 -b 0.0.0.0:8000 project.wsgi:application