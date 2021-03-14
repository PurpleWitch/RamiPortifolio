# Welcome To My Portfolio

Check out live version [here](http://54.221.228.33/)

## Install

You need [Pyhton3](https://www.python.org/downloads/) and [Node](https://nodejs.org/en/download/) to run this project.

1. Clone this repo
2. Run `cd django` then `cd frontend` to navigate to the _frontend_ directory
3. Use `npm i` to install the required packages for react
4. Use `npm run build` to create a production build of the website
5. `cd ..` to navigate to the _django_ directory
6. Run `pip install -r requirements.txt` to install the required packages for Django
7. Now we need to set up our django, so we use `python manage.py makemigrations` and then `python manage.py migrate`
8. Then we create an admin user by running `python manage.py createsuperuser` and filling in the needed info
9. Finally we run the django server using this command `python manage.py runserver`, note: this will run on port 3000 by default, to use another port add it's number after the command, for example: `python manage.py runserver 3001`
10. The server sould be running at this point, you just have to open "localhost:<3000 / the port you specified>"

## Technologies i used

- [Django](https://www.djangoproject.com/) as the main backend for the project.
- [React](https://reactjs.org/) as the main Front-end for the project.
- [React-Spring](https://www.react-spring.io/) to create beautiful interactive elements.
- [Docker](https://www.docker.com/) used to create an image that will be deployed.
- [AWS](https://aws.amazon.com/) to deploy the website using [EC2](https://aws.amazon.com/ec2) service.

## Key Files

1. [django/Portfolio/settings.py](https://github.com/RamiOkkeh/OnlineSchoolSystem/blob/master/Backend/core/settings.py)

   - Manages installed Django apps.
   - Serves the React Front-end template.

2. [django/frontend/src/App.tsx](https://github.com/RamiOkkeh/OnlineSchoolSystem/blob/master/frontend/src/App.tsx)

   - Main react Component.
   - Handles the Routing for the Front-end side.

## Deployed Link: [RamiOkkeh](http://54.221.228.33/)
