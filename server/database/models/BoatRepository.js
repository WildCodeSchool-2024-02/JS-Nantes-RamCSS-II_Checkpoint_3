const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `SELECT boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, tile.coord_x, tile.coord_y, tile.has_treasure 
      FROM ${this.table}
      JOIN tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y;`
    );

    // Return the array of boats
    return rows;
  }

  async update(boats) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [boats.coord_x, boats.coord_y, boats.id]
    );
    return rows.affectedRows;
  }
}

module.exports = BoatRepository;
