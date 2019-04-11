// Set up MySQL connection.
var mysql = require("mysql");

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
    port: 3306,
    user: "h0ctvizt3c84bakt",
    socketPath: 'mysql-socket-path',
    password: "a5th09dhdbmx1ysd",
    database: "strxe1bxktmilpms"
  })
}

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  socketPath: 'mysql-socket-path',
  password: "MyNewPass",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
