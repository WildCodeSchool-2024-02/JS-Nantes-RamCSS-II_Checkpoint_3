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

// const update = async (req, res) => {
//   try {
//   const { id } = req.params.id;
//   const { coord_x } = req.body.coord_x;
//   const { coord_y } = req.body.coord_y;

  
//   const putBoat = await tables.boats.update(id, coord_x, coord_y);
  
//   if (putBoat.affectedRows) {
//     res.status(204).send(`un bateau a été update`);
//   } else {
//     res.sendStatus(404);
//   }
    
//   } catch (err) {
//     console.log(err);
//   }
//   }
module.exports = {
  browse, 
  // update
};
