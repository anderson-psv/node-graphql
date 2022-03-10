FROM node:17-slim

#Change here yout timezone
#ENV TZ="America/Sao_Paulo"

# Create app directory
WORKDIR /graphql_node/

#Copy wich dependencies will be installed
COPY package.json package-lock.json /graphql_node/

# Install app dependencies
RUN npm ci --silent --only=development
# If you are building your code for production
# RUN npm ci --only=production

# add source code to image
COPY . .

USER node

EXPOSE 4000

CMD npm start