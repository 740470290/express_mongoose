const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
  name:String,
  pwd:String,
  age:String,
  sex:String,
  photo:{type:String,default:'./public/photo.jpg'},
  rDate:String
});
const msgSchema=new mongoose.Schema({
  name:String,
  msg:String,
  msgDate:String
},{collection:'message'});
//指定schema的集合名称

module.exports = {
    User:mongoose.model('User',userSchema),
    Msg:mongoose.model('Msg',msgSchema)
};
