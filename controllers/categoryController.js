const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const { Category } = require("../models/CategoryModel");
const {ErrorHandler} = require('../utils/errorHandler');
const { deleteOne, updateOne, applySlugify, getOne, createOne, getAll } = require("./factory");


/**
 * @description get all category
 * @route api/categories
 * @method get
 * @access public
 */
exports.getCategories = getAll(Category)
// exports.getCategories = asyncHandler(async (req, res) => {
//     const page = req.query.page || 1;
//     const limit = req.query.limit || 5;
//     const skip = (page - 1) * limit;
//     const categories = await Category.find().skip(skip).limit(limit);
//     return res
//         .status(200)
//         .json({ results: categories.length, page, data: categories });
// });

/**
 * @description create new category
 * @param {name} req
 * @method post
 * @route api/categories
 * @access public
 */
exports.createCategory = createOne(Category)
// exports.createCategory = asyncHandler(async (req, res) => {
//     const category = await new Category({
//         name: req.body.name,
//         slug: slugify(req.body.name),
//     });
//     await category.save();
//     return res.status(201).json({ message: "Category create successfully", data: category });
// });

/**
 * @description get category
 * @param {id} req
 * @method get
 * @route api/category/:id
 * @access public
 */
exports.getCategory = getOne(Category)
// exports.getCategory = asyncHandler(async (req, res, next) => {
//     const category = await Category.findById(req.params.id)
//     if (!category) {
//         return next(new ErrorHandler("SubCategory not found ;( ", 404));
//     }
//     return res.status(200).json({ data: category })
// });

exports.applySlugify = applySlugify()
/**
 * @description update category
 * @param {id} req
 * @method put
 * @route api/categories/:id
 * @access public
 */
exports.updateCategory = updateOne(Category)
// exports.updateCategory = asyncHandler(async (req, res, next) => {
//     const oldCategory = await Category.findById(req.params.id)
//     if (!oldCategory) {
//         return next(new ErrorHandler("SubCategory not found ;( ", 404));
//     }
//     const category = await Category.findOneAndUpdate(
//         { _id: req.params.id }, req.body, { new: true }
//     )
//     return res.status(200).json({ message: "Category update successfully", data: category })
// })

/**
 * @description delete category
 * @param {id} req
 * @method delete
 * @route api/categories/:id
 * @access public
 */
exports.deleteCategory = deleteOne(Category)
// exports.deleteCategory = asyncHandler(async (req, res, next) => {
//     const oldCategory = await Category.findById(req.params.id)
//     if (!oldCategory) {
//         return next(new ErrorHandler("SubCategory not found ;( ", 404));
//     }
//     const category = await Category.findOneAndDelete({ _id: req.params.id })
//     return res.status(204).json({ message: "Category deleted successfully", data: category })
// })

