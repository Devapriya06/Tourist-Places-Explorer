const Place = require("../models/Place");

// Get all places
const getPlaces = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get place by ID
const getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);

    if (!place) {
      return res.status(404).json({ message: "Tourist Place Not Found" });
    }

    res.json(place);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add new place
const addPlace = async (req, res) => {
  try {
    const place = new Place(req.body);
    const savedPlace = await place.save();

    res.status(201).json(savedPlace);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update place
const updatePlace = async (req, res) => {
  try {
    const updatedPlace = await Place.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedPlace) {
      return res.status(404).json({ message: "Tourist Place Not Found" });
    }

    res.json(updatedPlace);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete place
const deletePlace = async (req, res) => {
  try {
    const deletedPlace = await Place.findByIdAndDelete(req.params.id);

    if (!deletedPlace) {
      return res.status(404).json({ message: "Tourist Place Not Found" });
    }

    res.json({ message: "Tourist Place Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPlaces,
  getPlaceById,
  addPlace,
  updatePlace,
  deletePlace,
};