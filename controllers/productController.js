const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const { Product } = require("../models/ProductModel");
const { ErrorHandler } = require('../utils/errorHandler');
const ApiFeatures = require("../utils/apiFeatuers");
const { deleteOne, updateOne, applySlugify, getOne, createOne, getAll } = require("./factory");


/**
 * @description get all Products
 * @route api/products
 * @method get
 * @access public
 */
exports.getProducts = getAll(Product)
// exports.getProducts = asyncHandler(async (req, res) => {
//     // build query 
//     const documentCounet = await Product.countDocuments()
//     const products = new ApiFeatures(Product.find(), req.query)
//         .sort()
//         .Pagination(documentCounet)
//         .fields()
//         .search('Product')
//         .Filter();
//     // execute query 
//     const { mongoQuery, pagination } = products
//     const results = await mongoQuery;
//     return res.status(200).json({ results: results.length, pagination, data: results });

// });

/**
 * @description create new Products
 * @param {name} req
 * @method post
 * @route api/Products
 * @access private
 */
exports.createProduct = createOne(Product)
// exports.createProduct = asyncHandler(async (req, res) => {
//     req.body.slug = slugify(req.body.title)
//     const product = await new Product(req.body);
//     await product.save();
//     return res.status(201).json({ message: "product create successfully", data: product });
// });

/**
 * @description get Product
 * @param {id} req
 * @method get
 * @route api/products/:id
 * @access public
 */
exports.getProduct = getOne(Product)
// exports.getProduct = asyncHandler(async (req, res, next) => {
//     const product = await Product.findById(req.params.id).populate('category', "name -_id")
//     if (!product) {
//         return next(new ErrorHandler("SubProduct not found ;( ", 404));
//     }
//     return res.status(200).json({ data: product })
// });


exports.applySlugify = applySlugify()

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
// exports.deleteProduct = asyncHandler(async (req, res, next) => {
//     const product = await Product.findOneAndDelete({ _id: req.params.id })
//     if (!product) {
//         return next(new ErrorHandler("SubProduct not found ;( ", 404));
//     }
//     return res.status(204).json({ message: "Product deleted successfully", data: product })
// })


/**
 * @description search Product
 * @param {keyword} req
 * @method get
 *@route api/products/search
 * @access public
 */
exports.searchProduct = asyncHandler(async (req, res, next) => {
    const { keyword } = req.query;
    const products = await Product.find({
        $or: [
            { title: { $regex: keyword, $options: 'i' } },
            { description: { $regex: keyword, $options: 'i' } }
        ]
    });
    return res.status(200).json({ data: products })
})