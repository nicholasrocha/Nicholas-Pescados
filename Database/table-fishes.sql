CREATE TABLE fishes (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    price_per_kg REAL NOT NULL
);

INSERT INTO fishes (name, price_per_kg) VALUES
('Tilápia', 28.90),
('Camarão', 69.50),
('Tambaqui', 32.00),
('Traíra', 25.90);

SELECT * FROM fishes;

SELECT o.id, f.name, o.kg, o.total_price
FROM orders o
JOIN fishes f ON o.fish_id = f.id;

DELETE FROM orders;