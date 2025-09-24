const express = require("express");
const router = express.Router();

const {handleCreateShortenUrl,handleGetRealUrl,handleGetClickAnalytics,handleShowAllUrls} = require("../controller");

router.post("/",handleCreateShortenUrl);
router.get("/",handleShowAllUrls);
router.get("/:id",handleGetRealUrl);
// router.get("/analytics/:id",handleGetClickAnalytics);
router.get("/analytics/:id",handleGetClickAnalytics);

module.exports = router;