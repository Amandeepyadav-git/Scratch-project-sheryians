const express = require('express');
const router = express.outer();

router.get("/", (req, res)=>{
    res.send("Hey, it's working");
})

module.exports = router;