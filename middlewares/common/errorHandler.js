const createError = require("http-errors");

// 404 error handler 
function notFoundHandler(req, res, next) {
    next(createError(404, "No content was found"));
}

// default error handler 
function defaultError(err, req, res, next) {
    res.locals.error = err;
    res.status(err.status || 500);
    if(!res.locals.html) {
        res.render("error", {
            title: "error page",
        });
    } else {
        res.json(res.locals.error);
    }
}

module.exports = {
    notFoundHandler,
    defaultError
}