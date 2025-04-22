// utils/ErrorHandler.js

class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

        // Capture the stack trace, excluding constructor call
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;
