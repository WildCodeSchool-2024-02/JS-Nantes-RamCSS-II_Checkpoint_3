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

  // * J'AI ESSAYE 15 ANS COMME ON AVAIT FAIT EN COURS SANS SUCCES, ET J'AI RECOPIE LE CODE D'UNE QUETE HARMONIA, CA A FONCTIONNE MAIS SANS TROP COMPRENDRE LE TRUC
  
  // try {
  //   // * Fetch the informations of update
  //   // const id = req.params.id;
  //   // const { coord_x, coord_y } = req.body;
  //   const boat = { ...req.body, id: req.params.id };

  //   const updateBoats = await tables.boat.update(boat);

  //   if (updateBoats.affectedRows) {
  //     res.sendStatus(204);
  //   } else {
  //     res.sendStatus(404);
  //   }
  const boat = {...req.body, id: req.params.id};

  try {
    await tables.boat.update(boat);
    
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
  };

module.exports = {
  browse,
  edit
};
