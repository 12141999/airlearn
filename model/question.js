var mongoose = require("mongoose");
var questionschema = new mongoose.Schema ({
	type : String,
	userId : String,
	questionPaperData : Object
});

module.exports = mongoose.model("Question",questionschema);