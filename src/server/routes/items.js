const express = require("express");

const { createItemUser , getItems, deleteItemUser} = require("../controllers/itemController");

const router = express.Router();

router.post("/addItem", createItemUser);

router.get("/", getItems);

router.delete("/deleteItem", deleteItemUser);

module.exports = router;