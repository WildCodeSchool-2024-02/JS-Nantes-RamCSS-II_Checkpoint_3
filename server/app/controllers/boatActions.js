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

const edit = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const coordX  = req.body.coord_x;
    const coordY = req.body.coord_y;

    // Update boat from the database
    const updateBoat = await tables.boat.updateBoat({ coordX, coordY, id });

    if (updateBoat.affectedRows) {
      res.status(204).send('un jeu a mis à jour')
    } else {
      res.sendStatus(404);
    }
    
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};




module.exports = {
  browse,
  edit,
};
