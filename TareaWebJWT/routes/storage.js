
const express = require ("express");
const { getItems,getItem,updateItem,deleteItem,createItem } = require("../controllers/storage");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage")
const createItem = require("../controllers/storage")
const {validatorGetItem}=require("../validators/storage")

router.get("/",getItems);
router.get("/:id",validatorGetItem,getItem);
router.delete("/:id",validatorGetItem,deleteItems);
router.post("/",uploadMiddleware.single("myfile"),createItem);
module.exports= router;