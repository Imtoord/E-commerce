const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { Schema } = mongoose;
const saltRounds = 10;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 8 },
  email: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, required: true, default: "user" },
  access_token: { type: String },
});

userSchema.pre("save", function (next) {
  // Generate access_token only if the user is new (i.e., being registered)
  if (this.isNew ) {
    // Generate access_token using email and role
    this.access_token = jwt.sign(
      { email: this.email, role: this.role },
      process.env.SECRET_KEY
    );
  }

  // Hash the password
  if (this.isModified("password")) {
    if (this.password.length < 8) {
      throw new Error("Password must be at least 8 characters long");
    }
    this.password = bcrypt.hashSync(this.password, saltRounds);
  }


  next();
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
