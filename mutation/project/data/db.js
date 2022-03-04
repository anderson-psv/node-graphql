let id = 1;

function nextId() {
    return id++
}

const profiles = [
    { id: '0001', name: 'administrator' },
    { id: '0002', name: 'common' }
]

const users = [{
    id: nextId(),
    name: 'João Silva',
    email: 'jsilva@zemail.com',
    age: 29,
    profile_id: '0001',
    status: 'ACTIVE'
}, {
    id: nextId(),
    name: 'Rafael Junior',
    email: 'rafajun@wemail.com',
    age: 31,
    profile_id: '0002',
    status: 'INACTIVE'
}, {
    id: nextId(),
    name: 'Daniela Smith',
    email: 'danismi@umail.com',
    age: 24,
    profile_id: '0001',
    status: 'BLOCKED'
}]

module.exports = { users, profiles }