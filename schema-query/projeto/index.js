const { ApolloServer, gql } = require('apollo-server')
const { importSchema }      = require('graphql-import')
const { resolvers }         = require('./resolvers/index.js');

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`'Executing in ${url}`)
})
