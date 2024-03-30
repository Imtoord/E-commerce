const { User } = require("../models/UserModel");
const {
  deleteOne,
  updateOne,
  applySlugify,
  getOne,
  createOne,
  getAll,
} = require("./factory");



/**
 * @description get all User
 * @route api/Users
 * @method get
 * @access public
 */
exports.getUsers = getAll(User);

/**
 * @description create new User
 * @param {name} req
 * @method post
 * @route api/Users
 * @access public
 */
exports.createUser = createOne(User);

/**
 * @description get User
 * @param {id} req
 * @method get
 * @route api/Users/:id
 * @access public
 */
exports.getUser = getOne(User);

/**
 * @description update User
 * @param {id} req
 * @method put
 * @route api/Users/:id
 * @access public
 */
exports.updateUser = updateOne(User);

/**
 * @description delete User
 * @param {id} req
 * @method delete
 * @route api/Users/:id
 * @access public
 */
exports.deleteUser = deleteOne(User);

exports.applySlugify = applySlugify();
