
// require models
let User = require("../model/user");

exports.addUserDetails = async (req, res) => {
    let body = req.body;

    try {
        let results = await User.insertMany(body);
        res.send(results);                  // send msg that data is added rather than mongo result
    }
    catch (e) {
        console.log(e);
        res.send("Something Went Wrong");   //  A msg to send on frontend
    }
};




