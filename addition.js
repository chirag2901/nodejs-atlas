const res = require("express/lib/response")
var add = require("./calc")
add.addition()
res.write("hello")