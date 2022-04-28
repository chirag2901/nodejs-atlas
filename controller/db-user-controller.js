const UserModel = require("../model/user-model")
const bcrypt = require("bcrypt")
exports.signupdb = function(req,resp){
    let encpassword = bcrypt.hashSync(req.body.password,10)
    let user = new UserModel({
        firstName : req.body.firstName,
        email: req.body.email,
        password : encpassword
    })
    user.save(function(err,data){
        if(err){
            resp.json({data : err , msg : "Something went wrong ",status : -1});
        }
        else{
            resp.json({data:data,msg:"SignUp Done ",status:200})
        }
    })
}
exports.getAllusers = function(req,resp){
    UserModel.find(function(err,data){
        if(err){
            resp.json({data : err , msg : "Something went wrong ",status : -1});
        }
        else{
            resp.json({data:data,msg:"All Data Retrieved",status:200})
        }
    })
}
exports.deleteUser = function(req,resp){
    UserModel.deleteOne({_id:req.params.userId},function(err,data){
        console.log("Body == ", req.params);
        if(err){
            resp.json({data : err , msg : "Something went wrong ",status : -1});
        }
        else{
            console.log(data.deletedCount);
            if(data.deletedCount == 0){
                resp.json({data : req.params, msg : "InvaliduserId ",status : -1});
            }
            else{
                resp.json({data:data,msg:"Data Deleted",status:200})

            }
        }
    })
}
exports.getUserById = function(req,resp){
    UserModel.findOne({_id:req.params.userId},function(err,data){
        if(err){
            resp.json({data : err , msg : "Something went wrong ",status : -1});
        }
        else{
            console.log(data);
            if(data){
                resp.json({data:data,msg:"Data Retrieved",status:200})

            }
            else{
                resp.json({data : req.params, msg : "InvaliduserId ",status : -1});


            }
        }
    })
}
exports.updateUser = function(req,resp){
    UserModel.findOneAndUpdate({_id:req.body.userId},{name:req.body.name},function(err,data){
        if(err){
            resp.json({data : err , msg : "Something went wrong ",status : -1});
        }
        else{
            console.log(data);
            if(data){
                resp.json({data:data,msg:"Data Updated",status:200})

            }
            else{
                resp.json({data : req.body, msg : "InvaliduserId ",status : -1});


            }
        }
    })
}

exports.authenticate = function(req,resp){
    isCorrect = true;
    UserModel.findOne({email:req.body.email},function(err,data){
        if(data==null){
            isCorrect = false;
        }else{
            isCorrect = bcrypt.compareSync(req.body.password,data.password)
        }
        if(isCorrect){
            resp.json({msg:"Authentication Done ",status:200,data:data})
        }
        else{
            resp.json({msg:"Authentication Failed",status:-1,data:data})
        }
    })
}