const { productByPage,download } = require("../controller/product.controller.js");
const router = require("express").Router();
const apicache = require("apicache");

let cache = apicache.middleware;
router.use(cache('5 minutes'));

router.get("/:page",productByPage);
router.get("/",download);

module.exports = router;