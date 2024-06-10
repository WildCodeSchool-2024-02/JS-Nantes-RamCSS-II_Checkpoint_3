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

  async update(body) {
    const {id, coordX, coordY} = body;
    const [row] = await this.database.query(`update ${this.table} set coord_x = ?, coord_y = ? where id = ?`, [coordX, coordY, id]);

    return row.affectedRows;
  }
}

module.exports = BoatRepository;
