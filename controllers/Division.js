const Division = require("../models/Division")
const { Router } = require("express")
const router = Router()

router.get('/', async(req, res) => {
    const allDivisions = await Division.find({})
    res.json({status: 200, data: allDivisions})
})


module.exports = router