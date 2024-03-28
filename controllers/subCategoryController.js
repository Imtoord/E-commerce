const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const { SubCategory } = require("../models/SubCategoryModel");
const { ErrorHandler } = require('../utils/errorHandler');
const ApiFeatures = require("../utils/apiFeatuers");
const { deleteOne, updateOne, applySlugify, getOne, createOne, getAll } = require("./factory");

/**
 * @description get list of subcategories || all subcategories
 * @route api/categories/:categoryId/subcategories || api/subcategories
 * @method get
 * @access public
 */
exports.getListOfSubCategories = getAll(SubCategory)
// exports.getListOfSubCategories = asyncHandler(async (req, res) => {
//     // build query 
//     let filterobj = {};
//     if (req.params.categoryId) {
//         filterobj = { category: req.params.categoryId }
//     }
//     const documentCounet = await SubCategory.countDocuments()
//     const subCategories = new ApiFeatures(SubCategory.find(filterobj), req.query)
//         .sort()
//         .Pagination(documentCounet)
//         .fields()
//         .search()
//         .Filter();
//     // execute query 
//     const { mongoQuery, pagination } = subCategories
//     const results = await mongoQuery;

//     return res.status(200)
//         .json({ results: results.length, pagination, data: results });
// });

/**
 * @description insert getcategoryId to body if route is ==> api/categories/:categoryId/subcategories
 * @route api/categories/:categoryId/subcategories || api/subCategories
 * @param {name, category_id} req
 * @method post
 * @access public
 */
// exports.getcategoryId = (req, res, next) => {
//     if (req.params.categoryId) {
//         req.body.category = req.params.categoryId
//     }
//     next()
// }
/**
 * @description create new SubCategory  
 * @route api/categories/:categoryId/subcategories || api/subCategories
 * @param {name, category_id} req
 * @method post
 * @access public
 */
exports.createSubCategory = createOne(SubCategory)
// exports.createSubCategory = asyncHandler(async (req, res) => {
//     const subCategory = await new SubCategory({
//         name: req.body.name,
//         slug: slugify(req.body.name),
//         category: req.body.category
//     });
//     await subCategory.save()
//     return res.status(201).json({ message: 'SubCategory created successfully', data: subCategory });
// });

/**
 * @description get SubCategory
 * @param {id} req
 * @method get
 * @route api/categories/:categoryId/subcategories || api/subcategories/:id 
 * @access public
 */
exports.getSubCategory = getOne(SubCategory)
// exports.getSubCategory = asyncHandler(async (req, res, next) => {
//     const subCategory = await SubCategory.findById(req.params.id);
//     if (!subCategory) {
//         return next(new ErrorHandler("SubCategory not found", 404));
//     }
//     return res.status(200).json({ data: subCategory });
// });

exports.applySlugify = applySlugify()
/**
 * @description update SubCategory
 * @param {id, name, category_id} req
 * @method put
 * @route api/subcategories/:id
 * @access public
 */
exports.updateSubCategory = updateOne(SubCategory)
// exports.updateSubCategory = asyncHandler(async (req, res, next) => {
//     const subCategory = await SubCategory.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//     )
//     if (!subCategory) {
//         return next(new ErrorHandler("SubCategory not found", 404));
//     }
//     const newsubCategory = await subCategory.save();
//     return res.status(200).json({ message: 'SubCategory updated successfully', data: newsubCategory });
// });

/**
 * @description delete SubCategory
 * @param {id} req
 * @method delete
 * @route api/subcategories/:id
 * @access public
 */
exports.deleteSubCategory = deleteOne(SubCategory)

// exports.deleteSubCategory = asyncHandler(async (req, res, next) => {
//     const subCategory = await SubCategory.findById(req.params.id);
//     if (!subCategory) {
//         return next(new ErrorHandler("SubCategory not found", 404));
//     }
//     await SubCategory.findByIdAndDelete(req.params.id);

//     return res.status(203).json({ message: "SubCategory deleted successfully" });
// });
