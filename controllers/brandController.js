const { Brand } = require("../models/BrandModel");
const { deleteOne, updateOne, applySlugify, getOne, createOne, getAll } = require("./factory");

/**
 * @description get all Brand
 * @route api/brands
 * @method get
 * @access public
 */
exports.getBrands = getAll(Brand)

/**
 * @description create new Brand
 * @param {name} req
 * @method post
 * @route api/brands
 * @access public
 */
exports.createBrand = createOne(Brand)

/**
 * @description get Brand
 * @param {id} req
 * @method get
 * @route api/brands/:id
 * @access public
 */
exports.getBrand = getOne(Brand)

/**
 * @description update Brand
 * @param {id} req
 * @method put
 * @route api/Brands/:id
 * @access public
 */
exports.updateBrand = updateOne(Brand)

/**
 * @description delete Brand
 * @param {id} req
 * @method delete
 * @route api/brands/:id
 * @access public
 */
exports.deleteBrand = deleteOne(Brand)


exports.applySlugify = applySlugify()