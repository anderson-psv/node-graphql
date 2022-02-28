const {ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type User {
        id: ID
        name: String!
        email: String!
        age: Int
        real_salary: Float
        vip: Boolean
    }

    #Points of entrance from API
    type Query {
        hello: String!
        timeNow: Date!
        logedUser: User
    }
`

const resolvers = {
    User: {
        salary(user) {
            return user.real_salary
        }
    },
    Query: {
        hello() {
            return "Hello and welcome to my first graphql node query! :)";
        },
        timeNow() {
            return new Date;
        },
        logedUser() {
            return {
                'id': '321',
                'name': 'Anderson PS',
                'email': 'anderson_test@email.com',
                'age': 29,
                'real_salary': 1278.89,
                'vip': true
            };
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
