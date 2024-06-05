const adminToken = require("../utils/generateToken");
const Seller = require("../models/sellerModel");
const bcrypt = require("bcrypt");

const register = async(req,res)=>{
    console.log("hitted");
    try {
    const{sellerName,email,password} = req.body; 
    console.log(email)

    const sellerExist = await Seller.findOne({email})

    if (sellerExist)
        {
            return res.send("Seller is already registered")
        }
        const saltRounds = 10;
        const hashPassword = await bcrypt.hash(password, saltRounds);

        const newSeller = new Seller({
            sellerName, email,hashPassword
        })
      const newSellerCreated = newSeller.save();

      if (!newSellerCreated){
        return res.send("Seller not created")
      }
//token
      const token = adminToken(email);
   
    res.cookie("token", token);
    res.send("Signed successfully!")

    } catch (error) {
        console.log(error, "Something wrong");
        res.status(500).send("Internal Server Error")
    }
}
//signin

const login = async(req,res)=>{

    try {
    const {email,password}= req.body;
    console.log(email)
    
    const seller = await Seller.findOne({email})

    if (!seller)
        {
        return res.send("Seller not found")
    }

    const matchPassword = await bcrypt.compare(password, user.hashPassword);
    if(!matchPassword){
        return res.send("Password incorrect")
    }

    const token = adminToken(email);
    res.cookie("token", token);
    res.send("Logged in!");


    } catch (error) {
        console.log(error, "Something wrong");
        res.status(500).send("Internal Server Error")
    }
}

module.exports = {register, login};