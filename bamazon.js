var mysql = require()("mysql");
// var inquire = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root",
    password:"Password1!",
    database: "bamazon"
});

connection.connect(function(err) {
    if(err) throw err;
    // runSearch();
    console.log("You are connected as id " +connection.threadId + "\n");
});