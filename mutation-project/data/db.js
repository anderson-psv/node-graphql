let user_id = 1;
let profile_id = 1;

function nextIdUser() {
    return user_id++;
}

function nextIdProfile() {
    return profile_id++;
}

const profiles = [
    {
        id: nextIdProfile(),
        name: "administrator",
    },
    {
        id: nextIdProfile(),
        name: "common",
    },
    {
        id: nextIdProfile(),
        name: "visitor",
    },
];

const users = [
    {
        id: nextIdUser(),
        name: "João Silva",
        email: "jsilva@zemail.com",
        age: 29,
        profile_id: 1,
        status: "ACTIVE",
    },
    {
        id: nextIdUser(),
        name: "Rafael Junior",
        email: "rafajun@wemail.com",
        age: 31,
        profile_id: 2,
        status: "INACTIVE",
    },
    {
        id: nextIdUser(),
        name: "Daniela Smith",
        email: "danismi@umail.com",
        age: 24,
        profile_id: 3,
        status: "BLOCKED",
    },
];

module.exports = { users, profiles, nextIdUser, nextIdProfile };
