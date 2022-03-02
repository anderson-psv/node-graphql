const { profiles } = require('../data/db.js');

module.exports = {
    salary(user) {
        return user.real_salary
    },
    profile(user) {
        const selecteds = profiles.
            filter(p => p.id === user.profile_id)
        return selecteds ? selecteds[0] : null;
    }
};