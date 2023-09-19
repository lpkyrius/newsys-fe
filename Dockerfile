FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./ 

RUN npm install --omit=dev

COPY . ./

# For security reasons, Let's use node user, 
# it's a default user that comes with the 
# docker image for NodeJS. So, we don't use 
# the root user to run the next command. 
# USER node 

CMD [ "npm", "start" ]

EXPOSE 3000