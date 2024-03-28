const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
const { ErrorHandler } = require('../utils/errorHandler');
const ApiFeatures = require("../utils/apiFeatuers");

// 🫡🥶😬 delete
exports.deleteOne = (Model) =>
    asyncHandler(async (req, res, next) => {
        const docs = await Model.findByIdAndDelete(req.params.id);
        if (!docs) {
            return next(new ErrorHandler(`${Model} not found`, 404));
        }
        return res.status(203).json({
            message: `${Model} deleted successfully`
        });
    })


// update
exports.updateOne = (Model) =>
    asyncHandler(async (req, res, next) => {
        const docs = await Model.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if (!docs) {
            return next(new ErrorHandler(`${Model} not found`, 404));
        }
        await docs.save();
        return res.status(200).json({
            message: `${Model}  updated successfully`, data: docs });
    });


exports.applySlugify = () =>
    asyncHandler((req, res, next) => {
        if (req.body.name) {
            req.body.slug = slugify(req.body.name)
        } else if (req.body.title) {
            req.body.slug = slugify(req.body.name)
        }
        next()
    })

exports.getOne = (Model) => asyncHandler(async (req, res, next) => {
    const docs = await Model.findById(req.params.id);
    if (!docs) {
        return next(new ErrorHandler(`${Model} not found`, 404));
    }
    return res.status(200).json({ data: docs });
});

exports.createOne = (Model) => asyncHandler(async (req, res, next) => {
    if (req.params.categoryId) {
        req.body.category = req.params.categoryId
    }
    const docs = await new Model(req.body);
    await docs.save();
    return res.status(201).json({
        message: `${Model.name} create successfully`, data: docs
    });
});

exports.getAll = (Model, modelname = '') => asyncHandler(async (req, res) => {
    let filterobj = {};
    if (req.params.categoryId) {
        filterobj = { category: req.params.categoryId }
    }

    // build query 
    const documentCounet = await Model.countDocuments()
    const docs = new ApiFeatures(Model.find(filterobj), req.query)
        .sort()
        .Pagination(documentCounet)
        .fields()
        .Filter()
        .search(modelname)
    // execute query 
    const { mongoQuery, pagination } =  docs
    const results = await mongoQuery;
    return res.status(200).json({ results: results.length, pagination, data: results });
});