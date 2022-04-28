const mongoose= require("mongoose")
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
    roleName:{
        type:String,
        required:true,
        maxlength:12
    }
})
const RoleModel = mongoose.model("role",RoleSchema);
module.exports = RoleModel