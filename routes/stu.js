const express = require('express');
const fs = require("fs");
const router = express.Router();
const db=require('../model/db');
const user=db.models.User;
const msg=db.models.Msg;
const md5=require('../model/myMd5').myMd5;

router.get('/', function (req, res) {
    // fs.readFile('./db.json','utf8',function(err,data){
    //     var data=JSON.parse(data);
    //     data=data.stus;
    //     res.render('index.html',{
    //         msgs:data,
    //         username:req.session.userInfo
    //     })
    // })
    db.find(user,function (err,result) {
            res.render('index.html',{
            msgs:result,
            username:req.session.userInfo
        })
    })
});
router.get('/create', function (req, res) {
    res.render("post.html");
});
router.post('/create', function (req, res) {
    // let data = fs.readFileSync('./db.json', 'utf8');
    db.find(user,{name:req.body.name},function (err,result) {
        if(result.length!=0){
            return res.send('用户名已注册');
        }
    });
        // data = JSON.parse(data);
        // const stu=data.stus.findIndex(function (item) {
        //     return item.name==req.body.name
        // });
        // stu!=-1 && res.send('已注册');
    // 输出 JSON 格式
    var response = {
        "name": req.body.name,
        "pwd": md5(req.body.pwd),
        "age": req.body.age,
        "sex": req.body.sex,
        "rDate": (new Date()).toLocaleString()
    };
    // response.id=data.stus.length+1;
    db.add(user,response,function () {
        req.session.isLogin=true;
        req.session.userInfo=req.body.name;
        res.cookie("name",req.body.name);
        res.redirect('/stu');
    });
    // data['stus'].push(response);
    // let Str_ans = JSON.stringify(data);
    // fs.writeFile('./db.json', Str_ans, 'utf8', (err) => {
    //     if (err) throw err;
    // });

});
module.exports=router;

