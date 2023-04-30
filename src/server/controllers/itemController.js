const Item = require("../models/itemModel");
const User = require("../models/userModel");

// משייך פריט למשתמש
const createItemUser = async (req, res) => {
  const { name, price,user} = req.body;
 
  try {
    const item = await Item.create({ name, price});
    const foundUser = await User.findById(user);
    foundUser.items.push(item);
    await foundUser.save();
    
    res.status(200).json({ message: "item added successfully", item });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// מחזיר את כל הפריטים של המשתמש
const getItems = async (req, res) => {
  console.log(req);
  const {userId} = req.query;

  try {
  const user = await User.findById(userId).populate('items');
  if (!user) {
    throw new Error(`User with ID ${userId} not found`);
  }
  const items = user.items;

  const itemsArray = items.map(item => {
  return {
    name: item.name,
    price: item.price,
  };
});
console.log(itemsArray)
    res.status(200).json({ messg: "items fetched successfuly", itemsArray });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// מוחק פריט מהמשתמש
const deleteItemUser = async (req, res) => {
  const { user, name } = req.body;

  try {
    const foundUser = await User.findById(user).populate('items');
    console.log(name)
    console.log(foundUser.items)
    foundUser.items = foundUser.items.filter(x => x.name!==name)
    console.log(foundUser.items)
    // TODO: delete the item from Item Schema
    await foundUser.save();

    res.status(200).json({ message: "item deleted successfully", name });
  } catch (error) {
    res.status(400).json({ error: error.message });

  }

}

module.exports = {
getItems,
createItemUser,
deleteItemUser
};