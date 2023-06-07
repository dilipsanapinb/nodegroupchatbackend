const jwt = require("jsonwebtoken");

require('dotenv').config();

const auth = (req,res,next) => {
    let token = req.headers.authorization.split(" ")[1];
    if (!token) {
        
    }
    jwt.verify(token, process.env.key, function (err, decoded) {
        if (err) {
            return res
                .status(400)
                .send({ "Message": " please login first" });
        } else {
            let userID = decoded.userID;
            req.body.userID = userID;
            next();
        }
    });
}

module.exports={auth}