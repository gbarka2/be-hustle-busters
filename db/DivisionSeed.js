const mongoose = require('../db/connection')
const User = require('../models/Division')
const db = mongoose.connection
const manyDivisions = require('./DivisionSeed.json')


async function createDivisions(array) {
    const Divisions = await Division.insertMany(manyDivisions)
    console.log('Divisions', Divisions)
}
createDivisions(manyDivisions)