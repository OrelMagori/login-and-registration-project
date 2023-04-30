const User = require("../models/userModel");

// מתחבר עם המייל והסיסמה של משתמש קיים
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    res.status(200).json({ message: "user login successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// יוצר משתמש חדש
const signupUser = async (req, res) => {
  const { email, password, name, id } = req.body;
  try {
    const user = await User.signup(email, name, password, id);
    res.status(200).json({ messg: "user signup successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
};