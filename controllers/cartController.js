const { Cart } = require("../models/CartModel");
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
 * @description create new Cart
 * @param {name} req
 * @method post
 * @route api/Carts
 * @access public
 */
exports.createCart = createOne(Cart);

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
