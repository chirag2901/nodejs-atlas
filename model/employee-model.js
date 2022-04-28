const  mongoose = require("mongoose")

const Schema =  mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName:String,
    email:String,
    password:String,
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"  
    }
})
const EmployeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = EmployeeModel