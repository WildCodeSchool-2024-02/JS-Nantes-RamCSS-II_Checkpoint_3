const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Fonction pour mettre à jour les coordonnées d'un bateau
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { coordX, coordY } = req.body;
    
    await tables.boat.update(id, coordX, coordY);

    res.sendStatus(204);
  } catch (err) {

    next(err);
  }
};

module.exports = {
  browse, update
};
