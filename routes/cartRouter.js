const router = require("express").Router({ mergeParams: true });
const cartController = require("../controllers/cartController");
const cartMiddleware = require("../middlewares/cartMiddleware");

router
  .route("/")
  .get(cartController.createfilter, cartController.getCarts)
  .post(
    // cartController.applySlugify,
    // cartMiddleware.validateCreateCart,
    cartController.createCartParam,
    cartController.createCart
  )

router
  .route("/:id")
  .get(cartMiddleware.validateGetCartParams, cartController.getCart)
  .put(
    // cartMiddleware.validateUpdateCart,
    // cartController.applySlugify,
    cartController.updateCart
  )
  .delete(cartMiddleware.validateGetCartParams, cartController.deleteCart);

module.exports = router;
