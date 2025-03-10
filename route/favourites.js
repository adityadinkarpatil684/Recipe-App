const db=require('../utils/databaseutils');
const express = require('express');
const fav=express.Router();
//const dish=[];

// fav.post('/favourites',(req,res,next)=>{
//  console.log(req.body);
//  db.execute('INSERT INTO records(Dishname) VALUES (?)',[req.body.dish]);
//  res.redirect('/');
// }
// );

fav.post('/favourites', async (req, res, next) => {
  try {
      console.log(req.body);

      const [rows] = await db.execute('SELECT * FROM records WHERE Dishname = ?', [req.body.dish]);
      if (rows.length > 0) {
          console.log('Already added to the favourites');
          res.redirect('/');
      } else {
          await db.execute('INSERT INTO records(Dishname) VALUES (?)', [req.body.dish]);
          console.log('Dish added to favourites');
          res.redirect('/');
      }
  } catch (err) {
      console.error('Database error:', err);
      next(err);
  }
});


fav.get('/favourites',(req,res,next)=>{
  db.execute('SELECT * FROM records').then(([rows])=>{
  console.log(rows);
 // dish.push(rows);
  res.render('favourites', {Dishlist : rows});
  });
});

module.exports=fav;