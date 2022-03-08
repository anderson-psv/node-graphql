const { users, nextId } = require("../data/db");

module.exports = {
    newUser(_, args) {
        //Check if the email has already been registered
        const existingEmail = users.some((u) => u.email === args.email);

        if (existingEmail) {
            throw new Error("E-mail already exists!");
        }

        const new_user = {
            id: nextId,
            ...args, //Add all args as keys and values
            profile_id: "0001",
            status: "ACTIVE",
        };

        users.push(new_user);
        return new_user;
    },
    deleteUser(_, { id }) {
        const index = users.findIndex((u) => u.id === id);

        if (index < 0) return null;
        const deleteds = users.splice(index, 1);

        return deleteds ? deleteds[0] : null;
    },
};
