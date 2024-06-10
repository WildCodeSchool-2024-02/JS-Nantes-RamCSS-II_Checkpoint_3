const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const boats = await tables.boat.readAll();
    res.json(boats);
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  const { id } = req.params;
  const { coord_x: coordX, coord_y: coordY } = req.body;

  try {
    const affectedBoats = await tables.boat.update({ id, coordX, coordY });

    if (affectedBoats === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse, edit
};
