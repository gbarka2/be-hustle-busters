const User = require("../models/User")
const { Router } = require("express")
const router = Router()

router.get('/', async(req, res) => {
    const allUsers = await User.find({})
    res.json({status: 200, data: allUsers})
})              




module.exports = router