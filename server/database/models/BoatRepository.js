const AbstractRepository = require("./AbstractRepository");

class BoatRepository extends AbstractRepository {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    let query = `
    SELECT 
      boat.id, 
      boat.name, 
      boat.coord_x, 
      boat.coord_y, 
      tile.id AS tile_id, 
      tile.type, 
      tile.has_treasure  
    FROM 
      ${this.table} AS boat
    INNER JOIN 
      tile
    ON 
      boat.coord_x = tile.coord_x AND 
      boat.coord_y = tile.coord_y
  `;
    
    const queryName = [];
    if (where && where.name) {
      query += ` WHERE boat.name = ?`;
      queryName.push(where.name);
  
    }
    const [rows] = await this.database.query(query, queryName);

    // Return the array of boats
    return rows;
  }
  
    
  
  async update(boat) {
    // eslint-disable-next-line camelcase
    const { coord_x, coord_y, id } = boat;
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      // eslint-disable-next-line camelcase
      [coord_x, coord_y, id]
    );
    return result.affectedRows;
  }


}

module.exports = BoatRepository;
