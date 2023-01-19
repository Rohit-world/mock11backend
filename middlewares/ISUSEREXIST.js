const { UserModel } = require("../models/user.model");

const ISUSEREXIST = async (req, res, next) => {
  console.log(req.body)
  const { Email, Password } = req.body;
  if (!Email || !Password)
    return res.send({ msg: "Invalid data recieved" });
  const isPresent = await UserModel.find({ Email: Email });

  if (isPresent.length > 0)
    return res.send({ msg: "User already exist" });
  next();
};

module.exports = { ISUSEREXIST };
