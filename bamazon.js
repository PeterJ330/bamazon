var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Password1!",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("You are connected as id " +connection.threadId + "\n");
  productDisplay();  
});

function productDisplay() {
    var query = "SELECT * FROM bamazon";
    connection.query(query, function(err, res) {
        console.log(res);
    })
};

function productSearch() {
    inquirer
      .prompt({
        name: "product",
        type: "input",
        message: "Please enter the ID of the product you would like to purchase ";
      })
      .then(function(answer) {
        var query = "SELECT position, song, year FROM top5000 WHERE ?";
        connection.query(query, { artist: answer.artist }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          runSearch();
        });
      });
  }

