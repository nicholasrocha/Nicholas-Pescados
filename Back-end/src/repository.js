class Repository {
  constructor(database) {
    this.database = database;
  }

  async getFishes() {
    const res = await this.database.query(
      'SELECT id, name, price_per_kg FROM fishes ORDER BY id'
    );
    return res.rows;
  }

  async addOrder(fishId, kg) {
    const fishRes = await this.database.query(
      'SELECT price_per_kg FROM fishes WHERE id=$1', [fishId]
    );

    const price = fishRes.rows[0].price_per_kg * kg;

    await this.database.query(
      'INSERT INTO orders (fish_id, kg, total_price) VALUES ($1,$2,$3)',
      [fishId, kg, price]
    );

    return price;
  }

  async getOrders() {
    const res = await this.database.query(
      `SELECT o.id, f.name, o.kg, o.total_price
       FROM orders o JOIN fishes f ON o.fish_id=f.id`
    );
    return res.rows;
  }

  async clearOrders() {
    await this.database.query('DELETE FROM orders');
  }

  async removeOrder(id) {
    await this.database.query('DELETE FROM orders WHERE id=$1', [id]);
  }
}

module.exports = Repository;
