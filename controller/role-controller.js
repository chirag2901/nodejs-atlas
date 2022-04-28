const RoleModel = require("../model/role-model")

exports.addRole = function(req,resp){
    let role = new RoleModel(req.body)
    role.save(function(err,data){
        if(err){
            resp.json({data:data,msg:"Something Went Wrong",status:-1})
        }
        else{
            resp.json({data:data,msg:"Role Added ",status:200})
        }
    })
}
exports.getAllRoles = function(req,resp){
    RoleModel.find(function(err,data){
        if(err){
            resp.json({data:data,msg:"Something Went Wrong",status:-1})
        }
        else{
            resp.json({data:data,msg:"Role Retrieved ",status:200})
        }
    })
}