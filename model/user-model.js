const mongoose = require("mongoose")

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const UsersSchema = new Schema({
    email:String,
    password:String,
    firstName:String


})
const UserModel = mongoose.model("user",UsersSchema)

module.exports = UserModel  