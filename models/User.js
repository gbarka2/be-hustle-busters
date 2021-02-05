const { Schema, model } = require("mongoose")


const userSchema = new Schema (
{
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    userName: String,
    phone: Number,
    address: {
        street: String,
        city: String,
        state: String,
        country: String
    }
}

)

const User = model('User', userSchema)

module.exports = User