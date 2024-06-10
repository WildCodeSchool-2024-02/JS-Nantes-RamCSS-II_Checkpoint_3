
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

  // *fonction de mise a jour de beateau
  async update(boat) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET coord_x= ?, coord_y= ? WHERE id = ?`,
      [boat.coord_x, boat.coord_y, boat.boat_id]
    );
    // UPDATE boat SET nom_colonne1 = 'nouvelle valeur 1’, nom_colonne2 = 'nouvelle valeur 2’

    // Return the array of boats
    return rows;
  }
}

module.exports = BoatRepository;
