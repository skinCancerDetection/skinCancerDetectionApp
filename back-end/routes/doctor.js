const express = require('express');
const router = express.Router();
const User = require('../database/models');

router.get("/doctors",(req,res) => {
    User.Doctor.find({}).then(users =>{
        console.log("hi")
        res.json(users);
    })
})
router.post("/doctor",(req,res) => {
    console.log(req.body)
    User.Doctor.findOne({_id: req.body.id}).then(user=>{
        console.log(user)
        res.json(user);
    })
})

module.exports = router;