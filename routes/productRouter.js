const router = require('express').Router()
const productController = require('../controllers/productController')
const productMiddleware = require('../middlewares/productMiddleware')


router.get('/search', productController.searchProduct)

router.route('/')
    .get(productController.getProducts)
    .post(productMiddleware.validateCreateProduct, productController.applySlugify, productController.createProduct)

router.route('/:id')
    .get(productMiddleware.validateGetProductParams, productController.getProduct)
    .put(productMiddleware.validateUpdateProduct,productController.applySlugify, productController.updateProduct)
    .delete(productMiddleware.validateGetProductParams, productController.deleteProduct)

module.exports = router