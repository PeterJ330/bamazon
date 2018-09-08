var mysql = require()("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root",
    password:"Password1!",
    database: "bamazon"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("You are connected as id " + connection.threadId + "\n");
    productDisplay();
});

function productDisplay() {
    var query = "SELECT * FROM bamazon";
    connection.query(query, function(err, res) {
        console.log(res);
    })
};

