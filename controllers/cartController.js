const asyncHandler = require("express-async-handler");
const { Cart } = require("../models/CartModel");
const { ErrorHandler } = require("../utils/errorHandler");
const ApiFeatures = require("../utils/apiFeatuers");
const {
  deleteOne,
  updateOne,
  applySlugify,
  getOne,
  createOne,
  getAll,
} = require("./factory");

/**
 * @description get all Cart
 * @route api/Carts
 * @method get
 * @access public
 */
exports.getCarts = getAll(Cart);

/**
 * @description create filter object
 * @param {userId} req
 * @method get
 * @route api/:userId/Carts
 */
exports.createfilter = (req, res, next) => {
  if (req.params.userId) {
    req.filterobj = { user_id: req.params.userId };
  }
  next();
};
/**
 * @description create new Carts
 * @param {userId} req
 * @method post
 * @route api/:userId/Carts
 */
exports.createCartParam = (req, res, next) => {
  if (req.params.userId) {
    req.body.user_id = req.params.userId;
  }
  next();
};
/**
 * @description Add to Cart
 * @param {object} req - Request object containing user_id and products
 * @param {object} res - Response object
 * @param {function} next - Next middleware function
 * @method POST
 * @route api/carts
 * @access public
 */
exports.createCart = asyncHandler(async (req, res, next) => {
  try {
    let cart = await Cart.findOne({ user_id: req.body.user_id });

    if (!cart) {
      // If the cart doesn't exist, create a new one
      cart = await Cart.create({
        user_id: req.body.user_id,
        products: [
          { product_id: req.body.products[0].product_id, quantity: 1 },
        ],
      });
    } else {
      // If the cart already exists, check if the product is already in the cart

      const itemIndex = cart.products.findIndex(
        (item) =>
          item.product_id.toString() ===
          req.body.products[0].product_id.toString()
      );

      if (itemIndex > -1) {
        console.log("object=============");
        // If the product is already in the cart, increment its quantity by 1
        cart.products[itemIndex].quantity += 1;
      } else {
        // If the product is not in the cart, add it with quantity 1
        cart.products.push({
          product_id: req.body.products[0].product_id,
          quantity: 1,
        });
      }
    }
    console.log(cart);
    // Save the updated cart
    await cart.save();

    // Respond with success message and updated cart data
    res.status(201).json({
      success: true,
      message: "Product added to cart successfully",
      data: cart,
    });
  } catch (error) {
    // Handle errors
    console.error("Error adding product to cart:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred",
      error: error.message, // Include error message in the response
    });
  }
});

/**
 * @description get Cart
 * @param {id} req
 * @method get
 * @route api/Carts/:id
 * @access public
 */
exports.getCart = getOne(Cart);

/**
 * @description update Cart
 * @param {id} req
 * @method put
 * @route api/Carts/:id
 * @access public
 */
exports.updateCart = updateOne(Cart);

/**
 * @description delete Cart
 * @param {id} req
 * @method delete
 * @route api/Carts/:id
 * @access public
 */
exports.deleteCart = deleteOne(Cart);

exports.applySlugify = applySlugify();
