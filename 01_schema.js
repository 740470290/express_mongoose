const schema=require('mongoose').Schema;

const User=new schema({
  id:Number,
  name:String,
  age:Number,
  isMerried:Boolean
});

module.exports = User;
