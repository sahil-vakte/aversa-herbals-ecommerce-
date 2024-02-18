const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.patch('/:productId', productController.updateProductById);
router.delete('/:productId', productController.deleteProductById);

module.exports = router;
