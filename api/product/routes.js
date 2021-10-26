const express = require('express');
const {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('./controller');
const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:productId', updateProduct);
router.delete('/:productId', deleteProduct);

module.exports = router;
