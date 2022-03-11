const { users, nextId } = require("../data/db");

function userIndex(filter) {
    if (!filter) return -1;
    const { id, email } = filter;

    if (id) {
        return users.findIndex(u => u.id === id);
    } else if (email) {
        return users.findIndex(u => u.email === email);
    }
    return -1;
}

module.exports = {
    newUser(_, data) {
        //Check if the email has already been registered
        const existingEmail = users.some(u => u.email === data.email);

        if (existingEmail) {
            throw new Error("E-mail already exists!");
        }

        const new_user = {
            id: nextId,
            ...data, //Add all data as keys and values
            profile_id: "0001",
            status: "ACTIVE",
        };

        users.push(new_user);
        return new_user;
    },
    deleteUser(_, { filter }) {
        const index = userIndex(filter);

        //User not found
        if (index < 0) return null;

        const deleteds = users.splice(index, 1);

        return deleteds ? deleteds[0] : null;
    },
    updateUser(_, args) {
        const index = users.findIndex(u => u.id === args.id);

        //User not found
        if (index < 0) return null;

        const user = {
            ...users[index], //Load old data from user
            ...args, //Overwrite data to user
        };

        //Update user
        users.splice(index, 1, user);
        return user;
    },
};
