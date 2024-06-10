/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of boats
    return rows;
  }

  // async update(coord_x, coord_y, id) {
  //   const [row] = await this.database.query(`UPDATE ${this.table} SET coord_x=?, coord_y=? WHERE id=?`, [coord_x, coord_y, id]);

  //   return row.affectedRows;
  // }

  async update(boat) {
    const { id, coord_x, coord_y } = boat;
    const [result] = await this.database.query(`UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`, [coord_x, coord_y, id]);
    return result.affectedRows;
  }
}

module.exports = BoatRepository;
