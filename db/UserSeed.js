const mongoose = require('../db/connection')
const User = require('../models/User')
const db = mongoose.connection
const manyUsers = require('./UserSeed.json')


async function createUsers(array) {
    const Users = await User.insertMany(manyUsers)
    console.log('Users', Users)
}
createUsers(manyUsers)