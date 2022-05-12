"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get("/", ({}, res) => {
    res.status(200).json({ api: "up", timestamp: Date.now() });
});
exports.default = router;
