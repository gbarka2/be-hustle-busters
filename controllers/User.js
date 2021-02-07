const User = require("../models/User")
const { Router } = require("express")
const router = Router()

// GET ALL USERS
router.get('/', async(req, res) => {
    const allUsers = await User.find({})
    res.json({status: 200, data: allUsers})
}) 

// CREATE A USER
router.post('/', async(req,res) => {
    res.json(await User.create(req.body))
})

// GET A SINGLE USER BY _id
router.get('/:id', (req,res) => {
    User.find({_id: req.params.id})
    .populate("users")
    .then((users) => {
        res.json(users)
    })
})


// DESTROY A USER
router.delete('./:id', async (req, res) => {
    res.json(await User.findByIdAndRemove(req.params.id))
})



module.exports = router