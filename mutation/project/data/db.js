const profiles = [
    { id: '0001', name: 'administrator' },
    { id: '0002', name: 'common' }
]

const users = [{
    id: 1,
    name: 'João Silva',
    email: 'jsilva@zemail.com',
    age: 29,
    profile_id: '0001',
    status: 'ACTIVE'
}, {
    id: 2,
    name: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    age: 31,
    profile_id: '0002',
    status: 'INACTIVE'
}, {
    id: 3,
    name: 'Daniela Smith',
    email: 'danismi@umail.com',
    age: 24,
    profile_id: '0001',
    status: 'BLOCKED'
}]

module.exports = { users, profiles }