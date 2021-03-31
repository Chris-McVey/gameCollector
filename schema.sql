DROP TABLE IF EXISTS games;

CREATE TABLE games (
  id INTEGER PRIMARY KEY,
  product_name VARCHAR,
  release_date VARCHAR,
  console_name VARCHAR,
  genre VARCHAR,
  loose_price INTEGER,
  cib_price INTEGER,
  new_price INTEGER
);