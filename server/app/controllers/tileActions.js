const TileRepository = require("../../database/models/TileRepository");

const browse = async (req, res, next) => { // eslint-disable-line no-unused-vars
  try {
    const tileRepo = new TileRepository(); // Instantiate the TileRepository
    const tiles = await tileRepo.readAll(); // Use the readAll method
    res.status(200).json(tiles);
  } catch (error) {
    console.error("Error fetching tiles:", error);
    res.status(500).json({ error: "An error occurred while fetching tiles." });
  }
};

module.exports = {
  browse,
};


