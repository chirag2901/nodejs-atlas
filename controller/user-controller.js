var users = []
// var nodemailer = require('nodemailer');
const emailsend = require("gmail-send")
var datetime = new Date();
    
 exports.signup = function(req,res){
    // res.write("Hello SignUp Works ")
    // res.end()
    
    let userId = Math.random().toString().slice(2)
    let user = {
        "firstName":req.body.firstName,
        "email":req.body.email,
        "password":req.body.password,
        "userId":userId
    }
    users.push(user)
    res.json({data:user,status:1,"msg":"User Added at "+datetime});
    // **************************USING NODEMAILER************************
    // var transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //       user: 'pilavarechirag@gmail.com',
    //       pass: 'chirag@2901'
    //     }
    //   });
      
    //   var mailOptions = {
    //     from: 'pilavarechirag@gmail.com',
    //     to: req.body.email,
    //     subject: 'Sending Email using Node.js',
    //     text: 'That was easy for me !'
    //   };
      
    //   transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    //   });

    // *****************************USING GMAIL_SEND**********************
    const sendemail =  new emailsend({
        user:'pilavarechirag@gmail.com',
        pass: 'chirag@2901',
        to: req.body.email,
        subject: 'Signup Done/Testing Email Sending from Node Js Project',
        text:    'You just Created account using signup rest api',
    
    })
    console.log('* Email sending..............////');
    const result = sendemail() // Using default parameters
      .then((res) => {
        console.log('* Email Send then: res.result at :'+datetime , res.result);
        // full response from Nodemailer:
        // console.log('* [promise-example-1] then: res.full:', res.full);
      })
      .catch((error) => {
        console.log('ERROR:', error);
        console.log('* Email  catch: error:', error);
      });
    
    
}

exports.login = function(req,res){
    let email = req.body.email
    let password = req.body.password
    isValid = false
    let user 
    for(let i =0;i<users.length;i++){
        if(users[i].email == email && users[i].password == password){
            isValid = true 
            user = users[i]
            break;
        }
    }
    if(isValid == true ){
        res.json({data:user,status:1,msg:"Authentication Done "})
    }
    else{
        res.json({data:{email:email,password:password},msg:"invalid Credentials",status:-1})
    }

}
exports.listUsers = function(req,res){
    res.json({data:users,status:1,"msg":"All Users Retrieved "})
}

exports.deleteUser = function(req,res){
    // res.json({data:req.params.userId})
    let userId = req.params.userId
    let index = -1
    for(let i = 0;i<users.length; i++){
        if(users[i].userId == userId){
            index = i;
            break;
        }
    }
    if(index == -1){
        res.json({data:req.params,status:-1,msg:"inValid UserId"})
    }
    else{
        users.splice(index,1)
        res.json({data:users,status:1,msg:"User Removed"})
    }

}

exports.deleteUser2 = function(req,res){
    let userId = req.params.userId;
    let oldLength = users.length;
    users = users.filter(user=>user.userId != userId)
    let newLength = users.length
    if(oldLength == newLength){
        res.json({data:req.params,status:-1,msg:"User inValid"})
    }
    else{
        res.json({data:users,status:200,msg:"user removed "})
    }

}
exports.updateUser = function(req,res){

    res.json({data:req.body})
}
//put&post mapping data body ma send thay
//delete&get mapping params ma send thay data 