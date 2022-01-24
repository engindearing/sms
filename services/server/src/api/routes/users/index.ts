const express = require("express");

const router = express.Router();

router.route('/me').get(({},res:any) => res.json('/me'))

export default router;