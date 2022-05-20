"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.User = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        default: null,
    },
    lastName: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    role: {
        type: String,
        enum: ["guest", "staff", "orgAdmin", "admin"],
        default: "guest",
    },
    organization: {
        type: mongoose_1.default.SchemaTypes.ObjectId,
        ref: "Organization",
        default: null,
    },
}, { timestamps: true });
userSchema.static("findUserByEmailOrCreate", function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let user = yield this.findOne({ email })
                .populate({
                path: 'organization',
                populate: [
                    {
                        path: 'shelters',
                        select: 'name'
                    }
                ]
            });
            console.log(user);
            if (!user) {
                let newUser = yield this.insertMany({ email });
                return newUser[0];
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    });
});
exports.User = (0, mongoose_1.model)("User", userSchema);