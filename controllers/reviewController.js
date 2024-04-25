const { Review } = require("../models/ReviewModel");

const {
  deleteOne,
  updateOne,
  getOne,
  createOne,
  getAll,
} = require("./factory");

/**
 * @description get all Review
 * @route api/Reviews
 * @method get
 * @access public
 */
exports.getReviews = getAll(Review);

exports.getId = (req, res, next) => {
  // console.log(JSON.stringify(req.params));
  if (req.params.productId) {
    req.filterobj = { product: req.params.productId };
  }
  next();
};

exports.createId = (req, res, next) => {
  // console.log(JSON.stringify(req.params));
  if (req.params.productId) {
    req.body.product = req.params.productId;
  }
  next();
};
exports.exist = (req, res, next) => {
  const review = Review.findOne({
    user: req.body.user,
    product: req.body.product,
  });

  if (review) {
    return res.status(400).json({
      message: "You already reviewed this product",
    });
  }

  next();
};

/**
 * @description create new Review
 * @param {title, rating, user, product} req
 * @method post
 * @route api/Reviews
 * @access private/user
 */
exports.createReview = createOne(Review);

/**
 * @description get Review
 * @param {id} req
 * @method get
 * @route api/Reviews/:id
 * @access public
 */
exports.getReview = getOne(Review);

/**
 * @description update Review
 * @param {id} req
 * @method put
 * @route api/Reviews/:id
 * @access private/user
 */
exports.updateReview = updateOne(Review);

/**
 * @description delete Review
 * @param {id} req
 * @method delete
 * @route api/Reviews/:id
 * @access private/user || private/admin
 */
exports.deleteReview = deleteOne(Review);
