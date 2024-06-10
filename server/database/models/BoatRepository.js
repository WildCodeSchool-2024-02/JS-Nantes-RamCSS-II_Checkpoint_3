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

  async update(boat) {
    // * Exectue the SQL UPDATE query to update a boat from the "boat" table
    const [rows] = await this.database.query(`UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`, [boat.coord_x, boat.coord_y, boat.id]);

    // * Return the array of boats
    return rows.affectedRows;
  }
}

module.exports = BoatRepository;
