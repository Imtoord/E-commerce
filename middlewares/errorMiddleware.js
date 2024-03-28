module.exports.globalError = (err, req, res, next) => {
    // handle error
    err.status = err.status || 'error'
    err.statusCode = err.statusCode || 500
    process.env.NODE_ENV === 'development'?
    sendErrorInDev(err, res) : sendErrorInProd(err, res);
}

const sendErrorInDev = (err, res) => {
     res.status(err.statusCode)
        .json({
            err: {
                statusCode: err.statusCode,
                status: err.status,
                message: err.message,
                stack: err.stack
            }
        })
}
const sendErrorInProd = (err, res) => {
     res.status(err.statusCode)
        .json({
            err: {
                status: err.status,
                message: err.message
            }
        })
}