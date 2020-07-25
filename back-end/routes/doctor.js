const express = require('express');
const router = express.Router();
const User = require('../database/models');

router.get("/doctors",(req,res) => {
    User.Doctor.find({}).then(users =>{
        console.log("hi")
        res.json(users);
    })
})

module.exports = router;