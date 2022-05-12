"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUser = void 0;
const getCurrentUser = (req, res) => {
    const user = req.user;
    console.log(user);
    res.status(200).json({ user });
};
exports.getCurrentUser = getCurrentUser;
