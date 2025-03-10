const express=require('express');
const path=require('path');
const rootdirec=require('../utils/path');
const wel_router=express.Router();

wel_router.get('/',(req,res,next)=>{
        res.sendFile(path.join(rootdirec,'views','welcome.html'));
});

module.exports=wel_router;