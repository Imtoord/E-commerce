const { func } = require("joi");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const reviewSchema = new Schema(
  {
    title: String,
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'username'
  })
  next();
});

reviewSchema.statics.getAverageRating = async function (productId) {
  const res = await this.aggregate([
    {
      $match: {
        product: productId,
      },
    },
    {
      $group: {
        _id: "product",
        averageRating: { $avg: "$rating" },
        Quantity: { $sum: 1 },
      },
    },
  ]);
  console.log(res);
};

reviewSchema.post("save", function () {
  this.constructor.getAverageRating(this.product);
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = { Review };
