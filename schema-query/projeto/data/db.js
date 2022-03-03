const users = [
    {
        id: '1',
        name: 'Felipe Craum',
        email: 'fcraum@email.com',
        age: 35,
        profile_id: '0002',
        status: 'BLOCKED'
    },
    {
        id: '2',
        name: 'Fernando Abraum',
        email: 'fabraum@email.com',
        age: 21,
        profile_id: '0001',
        status: 'INACTIVE' 
    },
    {
        id: '3',
        name: 'Maila Fredo',
        email: 'mfredo@email.com',
        age: 26,
        profile_id: '0002',
        status: 'ACTIVE'
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

module.exports = { users, profiles };