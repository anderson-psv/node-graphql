const { users, nextId } = require('../data/db')

module.exports = {
    newUser(_, { name, email, age }) {
        const new_user = {
            id: nextId,
            name,
            email,
            age,
            profile_id: '0001',
            status: 'ACTIVE'
        }

        users.push(new_user)
        return new_user
    }
}