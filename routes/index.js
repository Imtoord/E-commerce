const Router = require('express').Router()
const categoryRouter = require('./categoryRouter')
const subCategoryRouter = require('./subCategoryRouter')
const brandRouter = require('./brandRouter')
const productRouter = require('./productRouter')

Router.use('/categories', categoryRouter)
Router.use('/subcategories', subCategoryRouter)
Router.use('/brands', brandRouter)
Router.use('/products', productRouter)

module.exports = Router