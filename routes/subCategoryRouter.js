const router = require("express").Router({ mergeParams: true });
const SubCategoryController = require("../controllers/subCategoryController");
const subCategoryMiddleware = require("../middlewares/subCategoryMiddleware");

router
  .route("/")
  .get(SubCategoryController.getListOfSubCategories)
  .post(
    subCategoryMiddleware.createSubCategory,
    SubCategoryController.applySlugify,
    SubCategoryController.createSubCategory
  );

router
  .route("/:id")
  .get(
    subCategoryMiddleware.getSubCategoryParams,
    SubCategoryController.getSubCategory
  )
  .put(
    subCategoryMiddleware.updateSubCategory,
    SubCategoryController.applySlugify,
    SubCategoryController.updateSubCategory
  )
  .delete(
    subCategoryMiddleware.getSubCategoryParams,
    SubCategoryController.deleteSubCategory
  );

module.exports = router;
