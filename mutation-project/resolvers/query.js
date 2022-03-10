const { users, profiles } = require('../data/db')

module.exports = {
    users() {
        return users;
    },
    user(_, { id }) {
        const selecteds = users
            .filter(u => u.id === id)
        return selecteds ? selecteds[0] : null
    },
    profiles() {
        return profiles
    },
    profile(_, { id }) {
        const selecteds = profiles
            .filter(p => p.id === id)
        return selecteds ? selecteds[0] : null 
    }
}