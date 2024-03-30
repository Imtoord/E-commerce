const { Router } = require("express");

const router = Router({ mergeParams: true });
const productController = require("../controllers/productController");
const productMiddleware = require("../middlewares/productMiddleware");

// Product Routes
router.get("/search", productController.searchProduct);

router
  .route("/")
  .get(productController.createfilter, productController.getProducts)
  .post(
    productController.createproduct,
    productController.applySlugify,
    productMiddleware.validateCreateProduct,
    productController.createProduct
  );

router
  .route("/:id")
  .get(
    productController.createfilter,
    productMiddleware.validateGetProductParams,
    productController.getProduct
  )
  .put(
    productMiddleware.validateUpdateProduct,
    productController.applySlugify,
    productController.updateProduct
  )
  .delete(
    productMiddleware.validateGetProductParams,
    productController.deleteProduct
  );

module.exports = router;
