const { Schema, model } = require("mongoose")


const divisionSchema = new Schema (
    {
        name: String,
        motto: String,
        img: String,
        leads: [
          {
            ref: "Lead",
            type: Schema.Types.ObjectId
          }
        ]
    }
)

const Division = model('Division', divisionSchema)

module.exports = Division