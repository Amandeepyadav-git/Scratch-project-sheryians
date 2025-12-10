const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Hey I'm owner, it's working");
})

module.exports = router;
