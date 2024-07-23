var express = require('express');
var router = express.Router();
const Upload = require('../Controllers/upload')

const { showAllProducts } = require('../Controllers/productsController')
const { createProduct } = require('../Controllers/productsController')
const { updateProduct } = require('../Controllers/productsController')
const { removeProduct } = require('../Controllers/productsController')


/* GET users listing. */
router.get('/', showAllProducts)
router.post('/', Upload.single('productImg'), createProduct)
router.put('/:id', Upload.single('productImg'), updateProduct)
router.delete('/:id', removeProduct)
// router.delete('/',)
  
module.exports = router;
  