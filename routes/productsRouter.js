const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Hey I'm product, it's working");
})

module.exports = router;
