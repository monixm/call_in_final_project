#!/bin/bash
python manage.py collectstatic --noinput
python manage.py makemigrations
python manage.py migrate
/opt/conda/envs/backend/bin/gunicorn -w 4 -b 0.0.0.0:8000 project.wsgi:application
