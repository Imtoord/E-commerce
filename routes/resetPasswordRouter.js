const { Router } = require("express");

const router = Router();
const resetpasswordController = require("../controllers/resetpasswordController");
// const resetpasswordMiddleware = require("../middlewares/resetpasswordMiddleware");

router.route("/").get(resetpasswordController.getEmail)
  .post(
    // resetpasswordController.createresetpassword,
    // resetpasswordController.applySlugify,
    // resetpasswordMiddleware.validateCreateresetpassword,
    resetpasswordController.checkpassword
  );

router
  .route("/:email/:token")
  .get(
    // resetpasswordController.createfilter,
    // resetpasswordMiddleware.validateGetresetpasswordParams,
    resetpasswordController.resetpassword
  )
  .post(
    // resetpasswordMiddleware.validateUpdateresetpassword,
    // resetpasswordController.applySlugify,
    resetpasswordController.updateresetpassword
  );
//   .delete(
//     // resetpasswordMiddleware.validateGetresetpasswordParams,
//     resetpasswordController.deleteresetpassword
//   );

module.exports = router;
