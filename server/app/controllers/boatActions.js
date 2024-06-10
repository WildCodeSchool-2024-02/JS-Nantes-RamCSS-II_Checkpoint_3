/* eslint-disable camelcase */
const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const boats = await tables.boat.readAll();
    res.json(boats);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { coord_x, coord_y } = req.body;

    const affectedRows = await tables.boat.update(id, { coord_x, coord_y }); // eslint-disable-line no-unused-vars

    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { newCoord_x, newCoord_y } = req.body;

    const affectedRows = await tables.boat.edit(id, { coord_x: newCoord_x, coord_y: newCoord_y }); // eslint-disable-line no-unused-vars

    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  update,
  edit,
};
