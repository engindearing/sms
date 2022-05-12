"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRequired = void 0;
const { verifyIdToken } = require("../../utils/firebase");
const User_1 = require("../../models/User");
const authRequired = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token)
        return res.status(401).json({ message: "Access token is required." });
    try {
        let result = yield verifyIdToken(token);
        if (!result)
            return res.status(401).json({ message: "Invalid Access Token" });
        let currentUser = yield User_1.User.findUserByEmailOrCreate(result.email);
        req.user = currentUser;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Unable to verify user" });
    }
});
exports.authRequired = authRequired;
