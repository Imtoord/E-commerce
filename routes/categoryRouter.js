const router = require('express').Router()
const categoryController = require('../controllers/categoryController')
const categoryMiddleware = require('../middlewares/categoryMiddleware')

// Nested route
const subCategoryRouter = require('./subCategoryRouter')

router.use('/:categoryId/subcategories', subCategoryRouter)


router.route('/')
    .get(categoryController.getCategories)
    .post( categoryMiddleware.validateCreateCategory, categoryController.applySlugify, categoryController.createCategory)

router.route('/:id')
    .get(categoryMiddleware.validateGetCategoryParams, categoryController.getCategory)
    .put(categoryMiddleware.validateUpdateCategory, categoryController.applySlugify, categoryController.updateCategory)
    .delete(categoryMiddleware.validateGetCategoryParams, categoryController.deleteCategory)

module.exports = router