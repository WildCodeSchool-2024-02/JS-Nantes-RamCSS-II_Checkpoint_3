/* eslint-disable camelcase */
const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);

    // Return the array of boats
    return rows;
  }

  async update(boat) {
    // Implement the SQL UPDATE query to update the boat in the database
    const { id, coord_x, coord_y } = boat;
    const query = `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`;
    const [result] = await this.database.query(query, [coord_x, coord_y, id]);

    // Return the number of affected rows
    return result.affectedRows;
  }


  async edit(boat) {
    // Implement the SQL UPDATE query to edit the boat in the database
    const { id, newCoord_x, newCoord_y } = boat;
    const query = `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`;
    const [result] = await this.database.query(query, [newCoord_x, newCoord_y, id]);

    // Return the number of affected rows
    return result.affectedRows;
  }
}

module.exports = BoatRepository;

