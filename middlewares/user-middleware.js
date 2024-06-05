const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateUser = (req,res,next)=>{
    const token = req.cookies.token;

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
        console.log(err);
    
        if (err) return res.sendStatus(403);
    
        req.user = user;

        console.log(req.user.role);
    
        next();
      });
    }

    module.exports = authenticateUser;
