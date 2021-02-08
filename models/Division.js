const { Schema, model } = require("mongoose")


const divisionSchema = new Schema (
    {
        name: String,
        motto: String,
        img: String
    }
)

const Division = model('Division', divisionSchema)

module.exports = Division