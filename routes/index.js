const Router = require("express").Router();
const categoryRouter = require("./categoryRouter");
const subCategoryRouter = require("./subCategoryRouter");
const brandRouter = require("./brandRouter");
const productRouter = require("./productRouter");
const userRouter = require("./userRouter");
const cartRouter = require("./cartRouter");
const resetPasswordRouter = require("./resetPasswordRouter");

Router.use("/categories", categoryRouter);
Router.use("/subcategories", subCategoryRouter);
Router.use("/brands", brandRouter);
Router.use("/products", productRouter);
Router.use("/users", userRouter);
Router.use("/carts", cartRouter);
Router.use("/resetpassword", resetPasswordRouter);


module.exports = Router;
