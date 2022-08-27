
const express = require('express');
const multer = require('multer');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const {validatorGetItem, validatorCreateItem} = require('../validators/storage');
const {createItem,getItem,getItems,updateItem,deleteItem} = require('../controllers/storage');

router.get('/', getItems);
router.get('/:id',validatorGetItem, getItem);
router.post('/',uploadMiddleware.single("myfile"), createItem);
router.put('/:id',validatorGetItem, updateItem);
router.delete('/:id',validatorGetItem, deleteItem);


module.exports = router;