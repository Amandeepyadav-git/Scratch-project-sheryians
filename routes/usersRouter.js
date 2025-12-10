const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Hey I'm user, it's working");
})

module.exports = router;
