const Division = require("../models/Division")
const { Router } = require("express")
const router = Router()

// GET ALL DIVISIONS 
router.get('/', async(req, res) => {
    const allDivisions = await Division.find({}).populate("leads")
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

// GET A SINGLE DIVISION BY NAME
router.get('/name/:name', (req, res) => {
  Division.find({name: req.params.name})
  .then((division) => {
    res.json({status: 200, data: division})
  })
})

// CREATE A DIVISION
router.post('/', async(req,res) => {
    res.json(await Division.create(req.body))
})

//UPDATE A DIVISION
router.put("/:id", (req, res) => {
    Division.findOneAndUpdate({ _id: req.params.id }, req.body).then(
      (division) => {
        res.json(division);
      }
    );
  }); 

// DESTROY A DIVISION
router.delete('/:id', async (req, res) => {
    Division.deleteOne({_id: req.params.id}).then((division) => {
        res.json(division)
    })
})





module.exports = router