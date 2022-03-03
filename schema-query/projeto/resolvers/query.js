const { users, profiles } = require('../data/db.js');

module.exports = {
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
};
