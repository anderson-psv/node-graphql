const {ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    #Points of entrance from API
    type Query {
        hello: String
        timeNow: Date!
    }
`

//process.env.TZ = 'America/Sao_Paulo'
const resolvers = {
    Query: {
        hello() {
            return "Hello and welcome to my first graphql node query! :)";
        },
        timeNow() {
            return new Date;
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`'Executing in ${url}`)
})
