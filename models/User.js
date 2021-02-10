const { Schema, model } = require("mongoose")


const userSchema = new Schema (
{
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    userName: String,
    phone: String,
    address: {
        street: String,
        city: String,
        state: String,
        country: String
    },
    leads: [
      {
        ref: "Lead",
        type: Schema.Types.ObjectId
      }
    ]
}

)

const User = model('User', userSchema)

module.exports = User