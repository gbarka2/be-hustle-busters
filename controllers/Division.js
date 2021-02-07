const Division = require("../models/Division")
const { Router } = require("express")
const router = Router()

// GET ALL DIVISIONS 
router.get('/', async(req, res) => {
    const allDivisions = await Division.find({})
    res.json({status: 200, data: allDivisions})
})

// GET A SINGLE Division BY _id
router.get('/:id', (req,res) => {
    Division.find({_id: req.params.id})
    .populate("divisions")
    .then((divisions) => {
        res.json(divisions)
    })
})

// DESTROY A DIVISION
router.delete('./:id', async (req, res) => {
    res.json(await Division.findByIdAndRemove(req.params.id))
})


// CREATE A DIVISION
router.post('/', async(req,res) => {
    res.json(await Division.create(req.body))
})


module.exports = router