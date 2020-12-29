FROM node:13.12.0-alpine
WORKDIR /myPortfolio/django/frontend

COPY package.json package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 
RUN npm run build
COPY . ./
EXPOSE 3030