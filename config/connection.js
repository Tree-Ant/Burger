var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "sp6xl8zoyvbumaa2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "yef6gporixvab0yi",
  password: "fbp08qic7dfxxxtp",
  database: "wfeebcaocu2c5ur4"
});

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3307,
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// ============EXPORT============
module.exports = connection;