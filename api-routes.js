// var express = require("express")
// var router = express.Router() 
var router = require("express").Router()
var usercontroller = require("./controller/user-controller")
var dbUserconrtroller = require("./controller/db-user-controller")
var rolecontroller = require("./controller/role-controller")
var employeecontroller = require("./controller/employee-controller")

const { db } = require("./model/user-model")
const req = require("express/lib/request")
const { route } = require("express/lib/application")

router.post("/signup",usercontroller.signup)
// router.get("/users",usercontroller.listUsers)
// router.post("/login",usercontroller.login)
// router.delete("/user/:userId",usercontroller.deleteUser)
// router.delete("/user2/:userId",usercontroller.deleteUser2)
// router.put("/user",usercontroller.updateUser)
router.post("/users",dbUserconrtroller.signupdb)
router.get("/users",dbUserconrtroller.getAllusers)
router.delete("/users/:userId",dbUserconrtroller.deleteUser)
router.get("/users/:userId",dbUserconrtroller.getUserById)
router.put("/users",dbUserconrtroller.updateUser)
router.post("/roles",rolecontroller.addRole)
router.get("/roles",rolecontroller.getAllRoles)

router.post("/employees",employeecontroller.addEmployee)
router.get("/employees",employeecontroller.getAllEmployee)

router.post("/authenticate",dbUserconrtroller.authenticate)

module.exports = router