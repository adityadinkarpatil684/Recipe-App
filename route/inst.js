const express=require('express');
//const path=require('path');
//const rootdirec=require('../utils/path');
const inst_router=express.Router();

let dishName;

inst_router.post('/instruction',(req,res,next)=>{
    console.log(req.body , req.body.dishtype);
    dishName=req.body.dishtype;
    res.render('instruction',{DishName: dishName});
});

exports.inst_router=inst_router;
//exports.dishName=dishName;