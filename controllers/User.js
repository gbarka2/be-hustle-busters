const User = require("../models/User")
const { Router } = require("express")
const router = Router()

// GET ALL USERS
router.get('/', async(req, res) => {
    const allUsers = await User.find({}).populate("leads")
    res.json({status: 200, data: allUsers})
}) 

// GET A SINGLE LEAD BY COMPANY NAME
router.get('/name/:name', (req, res) => {
  Division.find({leads: req.params.name})
  .then((lead) => {
    res.json({status: 200, data: lead})
  })
})

// CREATE A USER
router.post('/', async(req,res) => {
    res.json(await User.create(req.body))
})

// UPDATE A USER
router.put('/:id', (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body).then(
      (user) => {
        res.json(user);
      }
    );
  }); 

// GET A SINGLE USER BY _id
router.get('/:id', (req,res) => {
    User.find({_id: req.params.id}).populate("leads")
    .populate("users")
    .then((users) => {
        res.json(users)
    })
})


// DESTROY A USER
router.delete('/:id', async (req, res) => {
    User.deleteOne({_id: req.params.id}).then((user) => {
        res.json(user)
    })
})



module.exports = router