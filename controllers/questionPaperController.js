
// require models
let Question = require("../model/question");
const user = require("../model/user");


// fetched question paper
let fetchedPaper = [];


exports.addQuestionPaper = async (req, res) => {
    let body = req.body;

    try {
        let results = await Question.insertMany(body);
        res.send(results);                  // send msg that data is added rather than mongo result
    }
    catch (e) {
        console.log(e);
        res.send("Something Went Wrong");   //  A msg to send on frontend
    }
};

exports.getQuestionPaperWithType = async (req, res) => {
    let type = req.body.type;

    try {
        let data = await Question.find({ type: type }, { questionPaperData: 1, _id: 0 });
        fetchedPaper = data[0];
        res.send(data[0]);
    }
    catch (e) {
        console.log(e);
        res.send("Something Went Wrong");   //  A msg to send on frontend
    }
}

exports.getQuestionPaperWithUserId = async (req, res) => {
    let type = req.body.userId;

    try {
        let data = await Question.find({ userId: userId }, { questionPaperData: 1, _id: 0 });
        fetchedPaper = data[0];
        res.send(data[0]);
    }
    catch (e) {
        console.log(e);
        res.send("Something Went Wrong");   //  A msg to send on frontend
    }
}

exports.getResult = async (req, res) => {

    if(fetchedPaper.length == 0) {
        return res.send("Please hit getQuestionPaperWithType API first so that you can see Question Paper")
    }

    let totalMarks = 0;
    let ansArray = req.body.ansArray;

    for (let i = 0; i < ansArray.length; i++) {
        if (ansArray[i]) {
            if (ansArray[i] === fetchedPaper.questionPaperData[i].correctAns)
                totalMarks += 4;
            else
                totalMarks -= 1;
        }
    }

   return res.send(`You obtained ${totalMarks} Marks`);         // send total marks
}



