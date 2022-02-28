const {ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    #Points os entrance of API
    type Query {
        ola: String
    }
`

const resolvers = {

}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`'Executando em ${url}`)
})
