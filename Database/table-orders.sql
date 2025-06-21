CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    fish_id INTEGER REFERENCES fishes(id),
    kg REAL NOT NULL,
    total_price REAL NOT NULL
);