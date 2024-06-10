/* eslint-disable camelcase */

const validateCoordinate = (req, res, next) => {

    const { coord_x, coord_y } = req.body;

    // * Validations rules
    if (coord_x === true && coord_y === true) {
        next();
    } else {
        res.sendStatus(422)
    }
};

module.exports = validateCoordinate;
