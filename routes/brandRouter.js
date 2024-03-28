const router = require("express").Router();
const brandController = require("../controllers/brandController");
const brandMiddleware = require("../middlewares/brandMiddleware");

router
  .route("/")
  .get(brandController.getBrands)
  .post(
    brandMiddleware.validateCreateBrand,
    brandController.applySlugify,
    brandController.createBrand
  );

router
  .route("/:id")
  .get(brandMiddleware.validateGetBrandParams, brandController.getBrand)
  .put(
    brandMiddleware.validateUpdateBrand,
    brandController.applySlugify,
    brandController.updateBrand
  )
  .delete(brandMiddleware.validateGetBrandParams, brandController.deleteBrand);

module.exports = router;
