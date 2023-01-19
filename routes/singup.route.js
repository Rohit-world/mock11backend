const express = require("express");
const bcrypt = require("bcrypt");
const SignupRoute = express.Router();
const { UserModel } = require("../models/user.model");
const { ISUSEREXIST } = require("../middlewares/ISUSEREXIST");

SignupRoute.post("/", ISUSEREXIST, async (req, res) => {
  const { Email, Password } = req.body;
  console.log(req.body);
  const hashedPass = await bcrypt.hash(Password, 6);
  const newUser = new UserModel({ Email, Password: hashedPass});
  await newUser.save();
  res.send({ msg: "SignUp successfull" });
});


module.exports = { SignupRoute };
