const asyncHandler = require("express-async-handler");
const { Product } = require("../models/ProductModel");
const { deleteOne, updateOne, applySlugify, getOne, createOne, getAll, search } = require("./factory");


/**
 * @description get all Products
 * @route api/products
 * @method get
 * @access public
 */
exports.getProducts = getAll(Product)

/**
 * @description create new Products
 * @param {name} req
 * @method post
 * @route api/Products
 * @access private
 */
exports.createProduct = createOne(Product)

/**
 * @description get Product
 * @param {id} req
 * @method get
 * @route api/products/:id
 * @access public
 */
exports.getProduct = getOne(Product)

/**
 * @description update Product
 * @param {id} req
 * @method put
 * @route api/products/:id
 * @access public
 */
exports.updateProduct = updateOne(Product)

/**
 * @description delete Product
 * @param {id} req
 * @method delete
 * @route api/products/:id
 * @access public
 */
exports.deleteProduct = deleteOne(Product)

/**
 * @description search Product
 * @param {keyword} req
 * @method get
 *@route api/products/search
 * @access public
 */

exports.searchProduct = search(Product)


exports.applySlugify = applySlugify()