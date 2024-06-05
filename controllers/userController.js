const generateToken = require("../utils/generateToken");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const register = async(req,res)=>{

    console.log("hitted");
    try {

        const {firstName, lastName, email, password} = req.body;
        console.log(email);

        const userExist = await User.findOne({ email });
        console.log(userExist);

        if (userExist) {

      return res.send("User is already registered");
    }

 //registering user code here

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
        sellerName,
        email,
        hashPassword,})

    const newUsercreated = newUser.save();

    if(!newUsercreated){
        return res.send("User not created");
    }

//token generating code

const token = generateToken(email);
   
    res.cookie("token", token);
    res.send("Signed successfully!")
        
    }  catch (error) {
        console.log(error, "Something wrong");
        res.status(500).send("Internal Server Error");
    }
}

//signin user code here

const login = async(req,res)=>{

try {

    const {email,password} = req.body;

    console.log(email,password);    

    const user = await User.findOne({email})

    if(!user){

        return req.send("User not found")
    }

    const matchPassword = await bcrypt.compare(password, user.hashPassword);

    if(!matchPassword){

        return req.send("Paswword not found");
    }

//token for signin

    const token = generateToken(email);
    res.cookie("token", token);
    res.send("Logged in!");

}   catch (error) {
    console.log(error, "Something wrong");
    res.status(500).send("Internal Server Error");
}
}

module.exports = {register,login};
