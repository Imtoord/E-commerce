const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const { Brand } = require("../models/BrandModel");
const { ErrorHandler } = require('../utils/errorHandler')
const ApiFeatures = require("../utils/apiFeatuers");
const { deleteOne, updateOne, applySlugify, getOne, createOne, getAll } = require("./factory");

/**
 * @description get all Brand
 * @route api/brands
 * @method get
 * @access public
 */
exports.getBrands = getAll(Brand)
// exports.getBrands = asyncHandler(async (req, res) => {
//     // build query 
//     const documentCounet = await Brand.countDocuments()
//     const brands = new ApiFeatures(Brand.find(), req.query)
//         .sort()
//         .Pagination(documentCounet)
//         .fields()
//         .search()
//         .Filter();
//     // execute query 
//     const { mongoQuery, pagination } = brands
//     const results = await mongoQuery;
//     return res.status(200).json({ results: results.length, pagination, data: results });
// });

/**
 * @description create new Brand
 * @param {name} req
 * @method post
 * @route api/brands
 * @access public
 */
exports.createBrand = createOne(Brand)
// exports.createBrand = asyncHandler(async (req, res) => {
//     const brand = await new Brand({
//         name: req.body.name,
//         slug: slugify(req.body.name),
//     });
//     await brand.save();
//     return res.status(201).json({ message: "Brand create successfully", data: brand });
// });

/**
 * @description get Brand
 * @param {id} req
 * @method get
 * @route api/brands/:id
 * @access public
 */
exports.getBrand = getOne(Brand)

exports.applySlugify = applySlugify()
/**
 * @description update Brand
 * @param {id} req
 * @method put
 * @route api/Brands/:id
 * @access public
 */
exports.updateBrand = updateOne(Brand)
// exports.updateBrand = asyncHandler(async (req, res, next) => {
//     const oldbrand = await Brand.findById(req.params.id)
//     if (!oldbrand) {
//         return next(new ErrorHandler("brand not found ;( ", 404));
//     }
//     const brand = await Brand.findOneAndUpdate(
//         { _id: req.params.id }, req.body, { new: true }
//     )
//     return res.status(200).json({ message: "Brand update successfully", data: brand })
// })

/**
 * @description delete Brand
 * @param {id} req
 * @method delete
 * @route api/brands/:id
 * @access public
 */
exports.deleteBrand = deleteOne(Brand)
// exports.deleteBrand = asyncHandler(async (req, res, next) => {
//     const oldbrand = await Brand.findById(req.params.id)
//     if (!oldbrand) {
//         return next(new ErrorHandler("brand not found ;( ", 404));
//     }
//     const brand = await Brand.findOneAndDelete({ _id: req.params.id })
//     return res.status(204).json({ message: "Brand deleted successfully", data: brand })
// })
