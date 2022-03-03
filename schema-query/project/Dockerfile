FROM node:17

#Change here yout timezone
#ENV TZ="America/Sao_Paulo"

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# add source code to image
COPY . .

EXPOSE 8080
EXPOSE 4000
CMD ["npm", "start"]