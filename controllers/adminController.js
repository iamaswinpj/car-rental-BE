const { adminToken } = require("../utils/generateToken");
const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  console.log("hitted");
  try {
    const { username, password } = req.body;
    console.log(username);

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newAdmin = new Admin({
      username,
      hashPassword,
    });
    const newAdminCreated = newAdmin.Save();
    if (!newAdminCreated) {
      return res.send("Admin not created");
    }
    //token
    const token = adminToken(email);

    res.cookie("token", token);
    res.send("Signed successfully!");
  } catch (error) {
    console.log(error, "Something wrong");
    res.status(500).send("Internal Server Error");
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.send("admin not found");
    }
    const matchPassword = await bcrypt.compare(password, user.hashPassword);
    if (!matchPassword) {
      return res.send("password incorrect");
    }
    //token

    const token = adminToken(email);
    res.cookie("token", token);
    res.send("Logged in!");
  } catch (error) {

    console.log(error, "Something wrong");
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { register,login };
