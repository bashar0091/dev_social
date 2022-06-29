const createError = require("http-errors");

function notFoundHandler(req, res, next) {
    next(createError(404, "No content was found"));
}

module.exports = {
    notFoundHandler
}