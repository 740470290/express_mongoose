const mongoose=require('mongoose');
const models=require('./Models');
const url='mongodb://localhost:27017/runoob';
mongoose.connect(url,{useNewUrlParser:true});

/**
 * 根据给定的model,将json数据保存到数据库中
 * @param model 数据库中的集合
 * @param json 数据
 * @param cb 回调函数
 */
function add(model,json,cb) {
    const o = new model(json);
    o.save(function (err,data) {
        cb(err,data);
    })
}
function del(model,filter,cb) {
    model.deleteOne(filter,function (err,res) {
        cb(err,res);
    })
}
function updata(model,filter,json,cb) {
    model.updateOne(filter,json,function (err,res) {
        cb(err,res);
    })
}
function find(model) {
    const a=arguments;
    if(a.length===2){
        model.find(a[1])
    }else if(a.length===3){
        model.find(a[1],a[2])
    }else if(a.length===4){
        model.find(a[1],a[2],a[3])
    }else{
        model.find(a[1],a[2],a[3],a[4])
    }
}
function obj(id){
    return mongoose.Types.ObjectId(id);
}
exports.models=models;
exports.add=add;
exports.del=del;
exports.updata=updata;
exports.find=find;
exports.obj=obj;

