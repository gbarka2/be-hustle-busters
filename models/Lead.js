const mongoose = require('../db/connection')


const leadSchema = new mongoose.Schema (
{
    contactName: String,
    companyName: String,
    position: String,
    phone: String,
    email: String,
    status: String,
    active: {type: Boolean, default: true},
    estimatedRevenue: String,
    actualRevenue: String,
}

)

const Lead = mongoose.model('Lead', leadSchema)
module.exports = Lead