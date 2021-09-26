# XRT Project (Extended Reality Training Project)

A Software engineering project about using VR/AR technology for creating a platform that provides extensive and immersive training. TEST

### Project Outline
The Virtual Organizational Training Experience is focusing on large corporate organizations that are looking to improve their training experience. The training experience is envisioned to eventually become a platform where companies can create their own XR training modules however, due to the time constraints of Software Studio 3A/3B, we will focus on creating the webapp component of the product, and one specific training scenario which is burger training for now.

Our team's objective is:
* Create an example of an immersive training experience module in XR
* Expandable for use as a platform to create training modules
* Create a webapp that links into the XR modules so users can access them and be assessed

### Live Sites

[Web App](http://ec2-13-55-156-75.ap-southeast-2.compute.amazonaws.com/)

[Swagger Docs](http://agid-kaharuba.github.io/2021_SES3A_TEAM1/swagger)

# Instruction Manual

## Frontend React App

## Prerequisite

* [Install NodeJS](https://nodejs.org/en/download/package-manager/)

## Quick Start

All of these commands should be run in the `frontend` directory

### The Manual Way

1. Install dependencies

   ```
   npm install
   ```

2. Run the application

   ```
   npm run start
   ```

## Backend API

## Prerequisite

* [Install NodeJS](https://nodejs.org/en/download/package-manager/)

* Copy the `.env.example` file and fill in the the `.env` file with your variables

   ```
   cp .env-example .env
   ```

* To config the .env. Check out the Backend.docx in the SES Team file

## Quick Start

All of these commands should be run in the `backend` directory

### The Manual Way

1. Install dependencies

   ```
   npm install
   ```

2. Run the application for prod or dev

   ```
   # PROD
   npm run prod

   # DEV
   npm run dev
   ```

   When running in `dev` mode when changes are detected in the `src` folder the server will automatically be reloaded to reflect the changes.

### The Docker Way

Make sure to follow the prerequisite steps above for setting the firebase service account key.

1. Build the docker container

   ```
    docker build -t 2021-ses3b-team1 .
   ```

2. Run the container

   ```
   docker run -p 4000:4000 2021-ses3b-team1
   ```

   For the dev command this will mount your current directory to the /app directory in the container and run the dev command.

## Unity Project

## Prerequisite

* [Install Unity 2020.3.0f1](https://unity3d.com/get-unity/download/archive)
* [Install Steam](https://store.steampowered.com/about/)

## Quick Start

All of these commands should be run in the `Unity` directory

### The Manual Way

1. Install dependencies
Add the workload with visual studio installer. Select the game development with Unity Workload

2. Run the backend
   ```
   npm run dev
   ```
3. Running the application either through frontend or Unity
* Press the `Launch Unity button` in the dashboard on Frontend

* Press the `Play Button` in Unity