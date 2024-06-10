const tables = require("../../database/tables");

const musicsRead = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const musics = await tables.musics.readAll();

    // Respond with the boats in JSON format
    res.json(musics);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  musicsRead,
};
