const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const validateReview = require("../middlewares/validatereview.js");
const { isLoggedIn, isAuthor } = require("../middlewares/authorization.js");
const reviewController = require("../controllers/reviews.js");

//Reviews Post Route
router.post(
    "/", 
    isLoggedIn, 
    validateReview, 
    wrapAsync(reviewController.createReview)
);

//Delete Review Route
router.delete(
    "/:reviewId", 
    isLoggedIn, 
    isAuthor, 
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;