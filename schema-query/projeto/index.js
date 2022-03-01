const {ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type User {
        id: ID
        name: String!
        email: String!
        age: Int
        salary: Float
        vip: Boolean
    }

    type Product {
        name: String!
        price: Float!
        discount: Float
        discountPrice: Float!
    }

    #Points of entrance from API
    type Query {
        hello: String!
        timeNow: Date!
        logedUser: User
        featuredProduct: Product!
    }
`

const resolvers = {
    User: {
        salary(user) {
            return user.real_salary
        }
    },
    Product: {
        discountPrice(product) {
            if(product.discount) {
                return parseFloat(product.price * (1 - product.discount)).toFixed(2);
            }
            else {
                return product.price;
            }
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
        },
        featuredProduct() {
            return {
                'name': 'Xbox Series S Controller',
                'price': 35.99,
                'discount': 0.5,
            }
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
