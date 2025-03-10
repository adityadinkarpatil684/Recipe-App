const express = require('express');
const detail= express.Router();

detail.get("/details/:dish",(req,res,next)=>{
    let dishid=req.params.dish;
    let dishname=dishid.replace(/ %20 /g,' ');
    res.render('details',{DishName:dishname});
});

module.exports=detail;