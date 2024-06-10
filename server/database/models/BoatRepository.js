const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    // const [rows] = await this.database.query(`select * from ${this.table}`);
    const [rows] = await this.database.query(`select boat.id, boat.name, boat.coord_x, boat.coord_y, tile.id as tile_id, tile.type, tile.has_treasure from ${this.table} JOIN tile on tile.coord_x = boat.coord_x and tile.coord_y = boat.coord_y`);

    // Return the array of boats
    return rows;
  }

  async update(body) {
    const {id, coordX, coordY} = body;
    const [row] = await this.database.query(`update ${this.table} set coord_x = ?, coord_y = ? where id = ?`, [coordX, coordY, id]);

    return row.affectedRows;
  }
}

module.exports = BoatRepository;
