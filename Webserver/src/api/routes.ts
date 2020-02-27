import express from "express";

const router = express.Router();

const controller = require("./controller/controller");

router.use('/', controller.index);

module.exports = router;