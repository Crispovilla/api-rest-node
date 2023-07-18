const express = require("express");
const uploadMiddleware = require("../utils/handleStorage");
const router = express.Router();
const {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/storage");
const { validatorGetItem } = require("../validators/storages");

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
router.post("/", uploadMiddleware.single("myfile"), createItem);
//router.put("/:id", updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
