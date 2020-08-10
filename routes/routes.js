module.exports = (app) => {
    const questionsPaperController = require("../controllers/questionPaperController");
    const userDetailsController  = require("../controllers/userDetailsController");


    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    
    // Post api's
    app.post('/addQuestionPaper', questionsPaperController.addQuestionPaper);
    app.post('/getResult', questionsPaperController.getResult);
    app.post('/getQuestionPaperWithType' , questionsPaperController.getQuestionPaperWithType);
    app.post('/getQuestionPaperWithUserId' , questionsPaperController.getQuestionPaperWithUserId);


    app.post('/addUserDetails', userDetailsController.addUserDetails);

}