const express = require("express");
const router = express.Router();
const {
  getAllCards,
  getSingleCard,
  createCard,
  deleteCard,
  editCard
} = require("../controllers/card.js");

router.route("/").get(getAllCards);
router.route("/:id").get(getSingleCard);
router.route("/").post(createCard);
router.route("/:id").delete(deleteCard);
router.route("/:id").put(editCard)

module.exports = router;
