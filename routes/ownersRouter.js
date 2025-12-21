const express = require('express');
const router = express.Router();
const ownerModel = require('../models/owners-model');

router.get("/", (req, res)=>{
    res.send("Hey I'm owner 1, it's working");
})

if(process.env.NODE_ENV === 'development'){
    router.post("/create", (req, res)=>{
    res.send("Hey I'm owner, it's working");
    })
  };


module.exports = router;
