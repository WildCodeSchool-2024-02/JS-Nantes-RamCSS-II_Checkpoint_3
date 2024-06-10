/* eslint-disable camelcase */

const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {

    let [rows] = [[]];
    if (where === undefined) {
      [rows] = await this.database.query(
        `select name,boat.coord_x,boat.coord_y,boat.id,type,has_treasure from ${this.table} JOIN tile ON boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y`
      );
    } else {
      [rows] = await this.database.query(
        `select name,boat.coord_x,boat.coord_y,boat.id,type,has_treasure from ${this.table} JOIN tile ON boat.coord_x=tile.coord_x and boat.coord_y=tile.coord_y where name=?`,
        [where.name]
      );
    }

    // Return the array of boats
    return rows;
  }

  async update({ id, coord_x, coord_y }) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `update ${this.table} set coord_x=?,coord_y=? where id=?`,
      [coord_x, coord_y, id]
    );

    // Return the array of boats
    return rows.affectedRows;
  }
}

module.exports = BoatRepository;
