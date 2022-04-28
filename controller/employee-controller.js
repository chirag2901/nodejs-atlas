const EmployeeModel = require("../model/employee-model")

exports.addEmployee = function(req,resp){
    let employee = new EmployeeModel(req.body)
    employee.save(function(err,data){
        if(err){
            resp.json({data:data,msg:"SMW",status:-1})
        }
        else{
            resp.json({data:data,msg:"Employee Added",status:200})
        }
    })
}
exports.getAllEmployee = function(req,resp){
    EmployeeModel.find().populate("role").exec(function(err,data){
        if(err){
            resp.json({data:data,msg:"SMW",status:-1})
        }
        else{
            resp.json({data:data,msg:"Employe Retrieved",status:200})
        }
    })
}