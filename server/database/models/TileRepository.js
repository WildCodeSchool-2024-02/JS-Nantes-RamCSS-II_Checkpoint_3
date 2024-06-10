const AbstractRepository = require("./AbstractRepository");

class TileRepository extends AbstractRepository {
  constructor(db) {
    super({ table: "tile" });
    this.db = db;
  }

  async readAll() {
    const [rows] = await this.db.query(
        `select * from ${this.table} order by coord_y, coord_x`
    );
    return rows;
  }

  async getRandomIsland() {
    const [rows] = await this.database.query(
      `select id from ${this.table} where type="island" order by rand() limit 1`
    );

    return rows[0];
  }

  async hideTreasure(island) {
    const [result] = await this.database.query(
      `update ${this.table} set has_treasure =
        case
          when id = ? then true
          else false
        end`,
      [island.id]
    );

    return result;
  }

  async readByCoordinates(coordX, coordY) {
    const query = 'SELECT * FROM checkpoint3.tiles WHERE coord_x = ? AND coord_y = ?';
    const [rows] = await this.db.execute(query, [coordX, coordY]);
    return rows;
  }
}

module.exports = TileRepository;
