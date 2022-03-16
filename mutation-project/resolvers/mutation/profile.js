const { profiles, nextIdProfile } = require("../../data/db");

module.exports = {
    newProfile(_, { name }) {
        //Check if the name has already been registered
        const existingName = profiles.some(p => p.name === name);

        if (existingName) {
            throw new Error(`Profile name('${name}') already exists!`);
        }

        const new_profile = {
            id: nextIdProfile(),
            name,
        };

        profiles.push(new_profile);
        return new_profile;
    },
    deleteProfile(_, { id }) {
        const index = profiles.findIndex(p => p.id === id);

        //Profile not found
        if (index < 0) return null;

        const deleteds = profiles.splice(index, 1);

        return deleteds ? deleteds[0] : null;
    },
    updateProfile(_, { id, name }) {
        const index = profiles.findIndex(p => p.id === id);

        //Profile not found
        if (index < 0) return null;

        const profile = {
            ...profiles[index], //Load old data from profile
            name, //Overwrite name to profile
        };

        //Update Profile
        profiles.splice(index, 1, profile);
        return profile;
    },
};