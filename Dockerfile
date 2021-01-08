FROM alpine as intermediate

FROM node:10.3.0

RUN apt-get update && apt-get install -y apt-utils cron

WORKDIR /usr/src/app

# Copy across the files from our `intermediate` container
RUN mkdir files
COPY . .

RUN npm i -S serve

RUN cd client && npm run build
RUN npm i

EXPOSE 5000
EXPOSE 7080

CMD [ "yarn", "start" ]
##### dockerfile endshere#####
