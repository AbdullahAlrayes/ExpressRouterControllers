const express = require('express');
const { getProducts, createProduct, deleteProduct } = require('./controller');
const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.delete('/:productId', deleteProduct);

module.exports = router;
