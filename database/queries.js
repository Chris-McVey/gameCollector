const Db = require('pg').Pool;
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE, DB_PORT } = process.env;
const db = new Db({
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  database: DB_DATABASE,
  port: DB_PORT,
});

const addGame = (game, callback) => {
  db.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    } else {
      const sql = `INSERT INTO games (id, product_name, release_date, console_name, genre, loose_price, cib_price, new_price) VALUES (${game.id}, '${game['product-name']}', '${game['release-date']}', '${game['console-name']}', '${game.genre}', ${game['loose-price']}, ${game['cib-price']}, ${game['new-price']})`
      client.query(sql, (err, result) => {
        release();
        if (err) {
          return callback(err, null);
        } else {
          return callback(null, result.rows);
        }
      })
    }
  })
}

const getCollection = (callback) => {
  db.connect((err, client, release) => {
    if (err) {
      return console.error('Error acquiring client', err.stack);
    } else {
      const sql = `SELECT * FROM games`
      client.query(sql, (err, result) => {
        release();
        if (err) {
          return callback(err, null);
        } else {
          return callback(null, result.rows);
        }
      })
    }
  })
}

module.exports = {
  addGame,
  getCollection
}