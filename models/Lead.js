const { Schema, model } = require("mongoose")


const leadSchema = new Schema (
{
    contactName: String,
    companyName: String,
    division: {ref:'Division', type: mongoose.Schema.Types.ObjectId},
    position: String,
    phone: Number,
    email: String,
    status: String,
    active: {type: Boolean, default: true},
    estimatedRevenue: Number,
    actualRevenue: Number,
    owner: {ref: 'User', type: mongoose.Schema.Types.ObjectId}
}

)

const Lead = model('Lead', leadSchema)
module.exports = Lead