import express from "express";

const router = express.Router();

router.get("/", ({}, res: any) => {
  res.status(200).json({ api: "up", timestamp: Date.now() });
});

export default router;
