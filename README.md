# LCS - Learning Center System #

## Project folder structure ##

1. .env: where we will keep all environment related constants, like database username, password, secret key of jwt if any, etc

2. main.go: in root, this will serve as the project/web-server entry point

3. makefile: will contain some basic commands to run the project

4. Relevant folders:
    1. controllers directory: contains controller that accepts a request and call a particular service to process it
    2. services: contains service that has the topic for doing all the process like maninpulating DB and giving back the desired result
    3. models: contains the struct for storing data in DB or fetching data from DB
    4. DB: keep your DB related oprations here
    5. routes: keep all your routes here and pass the name of controller 
    6. config: keep all configuration things like this, fetching variables from .env or even db config

