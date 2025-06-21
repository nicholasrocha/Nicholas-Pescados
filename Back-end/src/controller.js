const Repository = require('./repository');
const db = require('./database');
const repository = new Repository(db);

exports.getFishes = async (req, res) => {
  res.json(await repository.getFishes());
};

exports.addOrder = async (req, res) => {
  const { fish_id, kg } = req.body;
  const total_price = await repository.addOrder(fish_id, kg);
  res.json({ total_price });
};

exports.getOrders = async (req, res) => {
  res.json(await repository.getOrders());
};

exports.removeOrder = async (req, res) => {
  await repository.removeOrder(req.params.id);
  res.sendStatus(204);
};

exports.clearOrders = async (req, res) => {
  await repository.clearOrders();
  res.sendStatus(204);
};
