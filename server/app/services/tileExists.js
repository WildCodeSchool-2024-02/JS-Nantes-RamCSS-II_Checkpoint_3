const validateCoordinates = (req, res, next) => {
    const body = {
        coord_x : req.body.coord_x,
        coord_y : req.body.coord_y
      }

    if (body) {
        next();
    } else {
        res.sendStatus(422);
    }
}

module.exports = validateCoordinates;