const express = require("express");
const router = express.Router();
const {register,login} = require("../controllers/sellerController");


router.post("/seller-register", register);
router.post("/seller-login", login);

module.exports = router;

