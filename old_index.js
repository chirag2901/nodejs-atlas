var http = require("http")
var fs = require("fs")

http.createServer(function(req,res){
    console.log(req.url)
    if(req.url == "/login"){
        res.write("Login")
        res.end()
    }else if(req.url == "/signup"){
        res.write("SignUp")
        res.end()
    }
    else if(req.url == "/calc"){
        fs.readFile("calc.html",function(err,fileData){
            res.write(fileData)
            res.end()
        })
    }
    else if(req.url == "/logout"){
        res.write("Logout")
        res.end()
    }
    else if(req.url == "/addition"){
        res.write("addition")
        res.end()
    }
    else{
        res.write("404")
        res.end()
    }
     
 } ).listen(3000)     

// var express = require("express")

// var app = express()

// app.use(express.urlencoded({extended:true}))//urlencoded
// app.use(express.json()) //json

// app.get("/",function(req,res){
//     console.log("/");
//     res.write("/")
//     res.end();
// })
// app.get("/calc",function(req,res){
//     console.log("get calc");
//     console.log("*************");
//     console.log(req.params);
//     console.log(req.body);
//     console.log(req.query);
//     console.log("*************");

//     res.json({"msg":"success using get"})
// })
// app.post("/calc",function(req,res){
//     console.log("post calc ");
//     let ans = parseInt(req.body.n1) + parseInt(req.body.n2)

//     res.json({msg:"success",data:ans})
// })
// app.listen(3000,function(){
//     console.log("server started on 3000");
// })