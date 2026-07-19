const express = require("express");
const router = express.Router();

const {
  getPlaces,
  getPlaceById,
  addPlace,
  updatePlace,
  deletePlace,
} = require("../controllers/placeController");

router.get("/", getPlaces);

router.get("/:id", getPlaceById);

router.post("/", addPlace);

router.put("/:id", updatePlace);

router.delete("/:id", deletePlace);

module.exports = router;