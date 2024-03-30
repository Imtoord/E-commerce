const router = require("express").Router();
const userController = require("../controllers/userController");
const userMiddleware = require("../middlewares/userMiddleware");

const cartRouter = require("./cartRouter");

router.use("/:userId/cart", cartRouter);
router
  .route("/")
  .get(userController.getUsers)
  .post(
    userMiddleware.validateCreateUser,
    userController.applySlugify,
    userController.createUser
  );

router
  .route("/:id")
  .get(userMiddleware.validateGetUserParams, userController.getUser)
  .put(
    userMiddleware.validateUpdateUser,
    userController.applySlugify,
    userController.updateUser
  )
  .delete(userMiddleware.validateGetUserParams, userController.deleteUser);

module.exports = router;
