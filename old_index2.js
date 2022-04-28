var express = require("express")
var app = express()

app.use(express.urlencoded({extended:true}))//urlencoded data
app.use(express.json())//json
app.get("/",function(req,res){
    console.log("/")
    res.write("/")
    // res.end()
})
app.get("/calc",function(req,res){
    console.log("get calc")
    console.log("*******************")

    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    console.log("*******************")

    res.json({"msg":"succes get"})
    // res.end()
})
app.post("/calc",function(req,res){
    console.log("post calc")
    let ans = parseInt(req.body.n1) + parseInt(req.body.n2)
    res.send("addition" +ans)
    // console.log("*******************")
    // console.log(req.params);
    // console.log(req.body);
    // console.log(req.query);
    // console.log("*******************")

    res.json({"msg":"succes post",data:ans})
    // res.end()
})

 app.listen(3000,function(){
    console.log("Server Started on 3000")
 })