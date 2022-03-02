const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')

const users = [
    {
        id: '1',
        name: 'Felipe Craum',
        email: 'fcraum@email.com',
        age: 35,
        profile_id: '0002'
    },
    {
        id: '2',
        name: 'Fernando Abraum',
        email: 'fabraum@email.com',
        age: 21,
        profile_id: '0001' 
    },
    {
        id: '3',
        name: 'Maila Fredo',
        email: 'mfredo@email.com',
        age: 26,
        profile_id: '0002'
    }
];

const profiles = [
    {
        id: '0001',
        description: 'Administrator'
    },
    {
        id: '0002',
        description: 'Common'
    }
];

const resolvers = {
    User: {
        salary(user) {
            return user.real_salary
        },
        profile(user) {
            const selecteds = profiles.
                filter(p => p.id === user.profile_id)
            return selecteds ? selecteds[0] : null;
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
        },
        lotteryNumbers() {
            const ascend = (a, b) => a - b
            array = Array(6).fill(0);
            array.map((value, index, array) => {
                    //Generate unique random numbers
                    do {
                        random_number = parseInt(Math.random() * 60 + 1);
                    } while(array.indexOf(random_number) !== -1)
                    array[index] = random_number;
                });
            return array.sort(ascend);
        },
        users() {
            return users;
        },
        user(_, { id }) {
            const selecteds = users.
                filter(u => u.id === id)
            return selecteds ? selecteds[0] : null;
        },
        profiles() {
            return profiles;
        },
        profile(_, { id }) {
            const selecteds = profiles.
                filter(p => p.id === id)
            return selecteds ? selecteds[0] : null;
        }
    }
}

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`'Executing in ${url}`)
})
