const Lead = require("../models/Lead")
const User = require("../models/User")
const Division = require("../models/Division")
const { Router } = require("express")
const router = Router()
const mongoose = require("../db/connection")
const db = mongoose.connection

// GET ALL LEADS
router.get('/', async(req,res) => {
    const allLeads = await Lead.find({})
    res.json({status: 200, data: allLeads})
})
// GET A SINGLE LEAD BY _id
router.get('/:id', (req,res) => {
    Lead.find({_id: req.params.id})
    .populate("leads")
    .then((leads) => {
        res.json(leads)
    })
})



//DESTROY A LEAD
router.delete('./:id', async (req, res) => {
    res.json(await Lead.findByIdAndRemove(req.params.id))
})


// CREATE A LEAD
router.post('/', async(req,res) => {
    res.json(await Lead.create(req.body))
})


module.exports = router