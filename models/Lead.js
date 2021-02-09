const mongoose = require('../db/connection')


const leadSchema = new mongoose.Schema (
{
    contactName: String,
    companyName: String,
    // division: {ref:'Division', type: mongoose.Schema.Types.ObjectId},
    position: String,
    phone: String,
    email: String,
    status: String,
    active: {type: Boolean, default: true},
    estimatedRevenue: String,
    actualRevenue: String,
    // owner: {ref: 'User', type: mongoose.Schema.Types.ObjectId}
}

)

const Lead = mongoose.model('Lead', leadSchema)
module.exports = Lead