var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("terminal-table");
var t = new Table();

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

connection.connect(function (err) {
    if (err) throw err;
    console.log("\n");
    console.log("           Welcome to Bamazon!!")
    viewInventory();
});

function viewInventory() {
    var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products";
    connection.query(query, function (err, res) {
        t.push(
            ["ID", "             Name", "Price", "In Stock"]
        );

        for (var i = 0; i < res.length; i++) {
            t.push(
                [res[i].item_id, res[i].product_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log("\n");
        console.log("           ** Current Inventory **");
        console.log("" + t);
    })
    questions();
};

function search() {
    inquirer
    .prompt({
        name: "id",
        type: "input",
        message: "Please enter the ID of the Product you would like to purchase."
    })
    .then(function(answer) {
        switch (answer.input) {
            case "01":
            item01();
            break;
            
            case "02":
            item02();
            break

            case "03":
            item02();
            break

            case "04":
            item02();
            break

            case "05":
            item02();
            break

            case "06":
            item02();
            break

            case "07":
            item02();
            break

            case "02":
            item02();
            break

        }
    })
}

function questions() {
    inquirer
      .prompt({
        name: "input",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View Inventory",
          "Search Item",
          "Track Spending",
          "View Departments"
        ]
      })
      .then(function(answer) {
        switch (answer.input) {
      //   case "View Inventory":
      //     viewInventory();
      //     break;
  
        case "Search Item":
          search();
          break;
  
        case "Total Sales":
          sales();
          break;
  
        case "Department Productivity":
          department();
          break;
        }
      })
  };