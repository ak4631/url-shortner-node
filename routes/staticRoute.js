const express = require("express");
const router = express.Router();
const UrlModel = require("../models");
router.get("/",async(req,res)=>{
    const result = await UrlModel.find({});
    return res.render("home",{
        urls:result
    });
})



module.exports = router;

