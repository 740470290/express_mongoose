const mongoose=require('mongoose');
const express=require('express');
const app=express();
app.engine('html',require('express-art-template'));
app.use('/public', express.static('public'));
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.listen(80);
app.get('/',function (req,res) {
  res.send({"id":1})
});
app.get('/add',function (req,res) {
  res.render('test.html')
});
app.post('/',urlencodedParser,function (req,res) {
  console.log(req.body)
  res.send(req.body)
});
