# FROM python:3.9
# ENV PYTHONUNBUFFERED 1
# WORKDIR /app/api
# COPY requirements.txt ./
# RUN pip install -r requirements.txt
# RUN python manage.py runserver
# COPY . ./
# EXPOSE 4040


# Use an official Python runtime as a parent image
FROM python:3.9-alpine

# Adding backend directory to make absolute filepaths consistent across services
WORKDIR /app

ADD . /app

# Install Python dependencies
COPY ./requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Add the rest of the code
COPY . /app

# Make port 8000 available for the app
EXPOSE 8080

# Be sure to use 0.0.0.0 for the host within the Docker container,
# otherwise the browser won't be able to find it
CMD ['python', 'manage.py', 'runserver', '0.0.0.0:8080']