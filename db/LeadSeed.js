const mongoose = require('../db/connection')
const User = require('../models/Lead')
const db = mongoose.connection
const manyLeads = require('./LeadSeed.json')


async function createLeads(array) {
    const Leads = await Lead.insertMany(manyLeads)
    console.log('Leads', Leads)
}
createLeads(manyLeads)