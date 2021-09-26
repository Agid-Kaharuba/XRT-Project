# sudo docker build -t 2021-ses3b-team1-front .
# sudo docker run -p 80:3000 2021-ses3b-team1-front

FROM node:current-bullseye-slim
COPY ./build /app
WORKDIR /app
RUN npm install serve
ENTRYPOINT node_modules/serve/bin/serve.js -p 3000
EXPOSE 3000