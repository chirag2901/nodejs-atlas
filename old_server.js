var express =require("express")
const req = require("express/lib/request")
var app = express()
var fs = require("fs")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','ejs')


app.get("/",function(req,res){
    res.write("Welcome")
    res.end()
})
app.get("/calc",function(req,res){
    // setTimeout(() => {
    //     fs.readFile("./views/calc.html")
    // }, 3000);
    let data = fs.readFile("./views/calc.html",function(err,data){
        console.log("reading done ")
        console.log(data)
        res.write(data);
        res.end();
   
})
})
app.post("/addition",function(req,res){
    console.log("addition post api")
    let ans = parseInt(req.body.n1) + parseInt(req.body.n2)
    res.render("calcResult",
    {"ans":ans }
    );
    // res.write(ans+"")
    // res.end()
})
    
        
app.listen(3000,function(){
    console.log("server running well")
});