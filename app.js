const express=require('express');
const app=express();
const rootdir=require('./utils/path');
const welcome=require('./route/welcome');
const {inst_router}=require('./route/inst');
const detail=require('./route/detail');
const fav=require('./route/favourites');
const path=require('path');

app.use(express.urlencoded());

app.use('/',(req,res,next)=>{
   console.log(req.url , req.method);
   next();
});

app.use(welcome);
app.use(inst_router);
app.use(fav);
app.use(detail);

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(rootdir,"public")));

app.use((req,res,next)=>{
  res.status(404).send("<h1>Error 404 Page Not Found !!</h1>");
});

const PORT=2002;

app.listen(PORT,()=>{
   console.log(`Server started http://localhost:${PORT}`);
});
