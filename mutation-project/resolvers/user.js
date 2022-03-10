const { profiles } = require('../data/db')

module.exports = {
    profile(user) {
        const selecteds = profiles
            .filter(p => p.id === user.profile_id)
        return selecteds ? selecteds[0] : null
    }
}