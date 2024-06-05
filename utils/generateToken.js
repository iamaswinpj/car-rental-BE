const jwt = require('jsonwebtoken');
require("dotenv").config();

const secret_key = process.env.SECRET_KEY

const generateToken = (email) => {
    return jwt.sign({ data: email }, secret_key, {expiresIn: "1d",});
  };  
const adminToken = (user)=>{
 return jwt.sign({ data: user.id }, secret_key, {expiresIn:"1d",});
}
module.exports = {generateToken,adminToken};
