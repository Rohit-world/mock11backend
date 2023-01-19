const { UserModel } = require("../models/user.model");

const ISUSEREXIST = async (req, res, next) => {
  const { Email, Password } = req.body;
  if (!Email || !Password)
    return res.status(400).send({ msg: "Invalid data recieved" });
  const isPresent = await UserModel.find({ Email: Email });

  if (isPresent.length > 0)
    return res.status(400).send({ msg: "User already exist" });
  next();
};

module.exports = { ISUSEREXIST };
