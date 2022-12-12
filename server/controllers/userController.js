const User = require("../models/UserModel");

const registerUser = async (req, res) => {
  const { name, email, age, batch, monthlyFee } = req.body;

  if (!name || !email || !age || !batch || !monthlyFee) {
    return res.status(400).json({ message: "Please enter all fields !" });
  }
  try {
    // check if user exist
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        message: "Email already Exists. ",
      });
    }
    // create new user in database

    if (age >= 18 && age <= 65) {
      const createUser = User.create({
        name,
        email,
        age,
        batch,
        monthlyFee,
      });
      if (createUser) {
        return res.status(201).json({
          message: "User registered Successfully!",
          _id: createUser._id,
          name: createUser.name,
          email: createUser.email,
        });
      } else {
        return res.status(400).json({
          message: "Error registering user. Please try again later !",
        });
      }
    } else {
      res.status(404).json({
        message: "age should be greater than 18 & less than 65.",
      });
    }
  } catch (error) {
    res.status(404).json({ error });
  }
};

module.exports = {
  registerUser,
};
