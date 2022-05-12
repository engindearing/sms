"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictTo = void 0;
const restrictTo = (...roles) => (req, res, next) => {
    const { role } = req.user;
    if (!roles.includes(role)) {
        res.status(401).json({ message: "You are unauthorized to perform this action" });
    }
    next();
};
exports.restrictTo = restrictTo;
