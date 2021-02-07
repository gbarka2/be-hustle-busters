const Lead = require("../models/Lead")
const User = require("../models/User")
const Division = require("../models/Division")
const { Router } = require("express")
const router = Router()
const mongoose = require("../db/connection")
const db = mongoose.connection

router.get('/', async(req,res) => {
    const allLeads = await Lead.find({})
    res.json({status: 200, data: allLeads})
})

router.post('/', async(req,res) => {
    res.json(await Lead.create(req.body))
})


module.exports = router