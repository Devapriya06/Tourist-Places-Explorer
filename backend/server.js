const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const placeRoutes = require("./routes/placeRoutes");

app.use("/api/places", placeRoutes);

app.get("/", (req, res) => {
  res.send("Tourist Places Explorer API is Working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});