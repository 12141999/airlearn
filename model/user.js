var mongoose = require("mongoose");
var userschema = new mongoose.Schema ({
    name : String,
    email : String,
    userName : String,
    address : String,
    age : Number,
    questionsIdArray : Array

});

module.exports = mongoose.model("User",userschema);