const { urlencoded, application } = require("express")
const usercontroller = require("./controller/user-controller")
var express = require("express")
const res = require("express/lib/response")
const apiRoutes = require("./api-routes")
const mongoose = require('mongoose');
const multer = require("multer")
const path = require("path") 
const { diskStorage } = require("multer")
const fs = require("fs")
const { log } = require("console")
const cors = require("cors")
// const emailsend = require("gmail-send")

// require('./controller/db-user-controller')

 const app = express()
// const sendemail =  new emailsend({
//     user:'pilavarechirag@gmail.com',
//     pass: 'chirag@2901',
//     to: 'chiragpilavare1335@gmail.com',
//     subject: 'Testing Email Sending from Node Js Project',
//     text:    'gmail-send example 1',

// })
// console.log('* [promise-example-1] sending');
// const result = sendemail() // Using default parameters
//   .then((res) => {
//     console.log('* [promise-example-1] then: res.result:', res.result);
//     // full response from Nodemailer:
//     // console.log('* [promise-example-1] then: res.full:', res.full);
//   })
//   .catch((error) => {
//     console.log('ERROR:', error);
//     console.log('* [promise-example-1] catch: error:', error);
//   });

 let corsConfig = {
     origin:"",
     methods:["GET","POST"]
 }

 app.use(express.urlencoded({extended:true}))
 app.use(express.json())
 app.use("/api",apiRoutes)
app.use(cors())//default --- allow all


//  app.get("/signup",usercontroller.signup)

const uri = "mongodb+srv://chirag:chirag@cluster0.scsdr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri,function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("dbConnected");
    }
 })
//  mongoose.connect("mongodb://localhost/meandec",function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("dbConnected");
//     }
//  })
// ****************************easy code upload*******************************

 let diskStorageObj = multer.diskStorage({
     destination:function(req,file,next){
            console.log(req.body.email);
            fs.mkdir("uploads/"+req.body.email,function(err){
                next(null,"uploads/"+req.body.email)
            })
     },
     filename:function(req,file,next){
         console.log("Email=> ",req.body.email);
         next(null,file.originalname)
     }
 })
 const upload = multer({storage:diskStorageObj,limits:{fileSize:1024*1024*10}}).single("profilePic")
 app.post("/saveprofile",function(req,res){
     upload(req,res,function(err){
         if(err){
             res.json({msg:err})
         }else{
             res.json({msg:req.body})
         }
     })
 })

//  **************************************Custom Upload****************************
// var storageConfig = multer.diskStorage({
//     destination:function(req,file,next){
//         next(null,"uploads")
//     },filename:function(req,file,next){
//         let fileName = file.originalname
//         let ext = path.extname(file.originalname)
//         next(null,fileName)

//     }
// })
// var upload = multer({
//     storage:storageConfig,
//     limits:{fileSize:1024*1000*20},
//     fileFilter:function(req,file,next){
//         let mime = file.mimetype
//         return next(null,file.originalname)
//     }
// }).single("profilePic")


// app.post("/uploadprofile",function(req,res,next){
//     upload(req,res,function(err,data){
//         if(err){
//             res.json({status:-1,data:err,msg:"SWM"})
//         }
//         else{
//             res.json({status:200  ,data:data,msg:"Upload done" })
//         }
//     })
// })
 app.listen(3000,function(){
    console.log("Server Started well on 3000") 
})