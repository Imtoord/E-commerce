const { Category } = require("../models/CategoryModel");
const { deleteOne, updateOne, applySlugify, getOne, createOne, getAll } = require("./factory");


/**
 * @description get all category
 * @route api/categories
 * @method get
 * @access public
 */
exports.getCategories = getAll(Category)

/**
 * @description create new category
 * @param {name} req
 * @method post
 * @route api/categories
 * @access public
 */
exports.createCategory = createOne(Category)

/**
 * @description get category
 * @param {id} req
 * @method get
 * @route api/category/:id
 * @access public
 */
exports.getCategory = getOne(Category)

/**
 * @description update category
 * @param {id} req
 * @method put
 * @route api/categories/:id
 * @access public
 */
exports.updateCategory = updateOne(Category)

/**
 * @description delete category
 * @param {id} req
 * @method delete
 * @route api/categories/:id
 * @access public
 */
exports.deleteCategory = deleteOne(Category)

exports.applySlugify = applySlugify()