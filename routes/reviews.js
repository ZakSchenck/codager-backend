const express = require("express");
const router = express.Router();
const {
  getAllReviews,
  createReview,
  deleteReview,
} = require("../controllers/reviews.js");

router.route("/").get(getAllReviews);
router.route("/").post(createReview);
router.route("/:id").delete(deleteReview)

module.exports = router;