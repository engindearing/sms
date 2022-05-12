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
exports.getAllOrgs = exports.createOrg = void 0;
const Organization_1 = require("../../../models/Organization");
const createOrg = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let newOrg = yield Organization_1.Organization.create(req.body);
        res.status(200).json({
            org: newOrg
        });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.createOrg = createOrg;
const getAllOrgs = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let organizations = yield Organization_1.Organization.find({}).populate({ path: 'shelters' });
        res.status(200).json({ organizations });
    }
    catch (error) {
        res.status(400).json({ error });
    }
});
exports.getAllOrgs = getAllOrgs;
