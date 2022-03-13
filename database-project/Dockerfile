FROM node:17-slim

#Change here yout timezone
#ENV TZ="America/Sao_Paulo"

# Create app directory
WORKDIR /graphql_node/

#Copy wich dependencies will be installed
COPY ./src/package.json /graphql_node/

RUN npm i -s knex mysql

# Install app dependencies
RUN npm ci --silent --only=development
# If you are building your code for production
# RUN npm ci --only=production

# add source code to image
COPY . .

USER node

EXPOSE 4000

CMD tail -f /dev/null