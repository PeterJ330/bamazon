var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("terminal-table");
// var t = new Table();

var lineBreak = "\n";
var productId = "";
var quantity = 0;
var stockDepleted = false;

// ====================================================================================================================================================
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password1!",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(lineBreak);
    console.log("            ** Welcome to Bamazon **")
});

viewInventory();
setTimeout(purchaseQuestions, 500);
// ====================================================================================================================================================
//                        VIEW INVENTORY FUNCTION
// ====================================================================================================================================================
function viewInventory() {
    var query = "SELECT item_id, product_name, department_name, price, stock_quantity FROM products";
    connection.query(query, function (err, res) {
        var t = new Table();
        t.push(
            ["ID", "             Name", "Price", "In Stock"]
        );
        for (var i = 0; i < res.length; i++) {
            t.push(
                [res[i].item_id, res[i].product_name, "$" + res[i].price.toFixed(2), res[i].stock_quantity]
            );
        }

        console.log("                Current Inventory");
        console.log("" + t);
        console.log(lineBreak);
    })
};
// ====================================================================================================================================================
//                          PURCHSE QUESTIONS FUNCTION
// ====================================================================================================================================================
function purchaseQuestions() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "id",
                message: "Enter the ID of the product you would like to purchase."
            },
            {
                type: "input",
                name: "amount",
                message: "How many units would you like?"
            }
        ]).then(function (answer) {
            productId = answer.id;
            quantity = answer.amount;
            itemPurchase();
        })
};


// ====================================================================================================================================================
//                            ITEM PURCHASE FUNCTION
// ====================================================================================================================================================
function itemPurchase() {
    connection.query("SELECT * FROM products WHERE ?", { item_id: productId }, function (err, res) {
        console.log(lineBreak);
        if (res[0].stock_quantity < quantity) {
            console.log("Insufficient quantity. There are "+ res[0].stock_quantity +" "+ res[0].product_name + "(s) left in stock.")
            purchaseQuestions();
            // setTimeout(purchaseQuestions, 500);
        } else {
            console.log(" -- Order Summary -- ")
            console.log("Item: " + res[0].product_name);
            console.log("Quantity: " + quantity);
            var totalPrice = res[0].price * quantity;
            console.log("Order Total: $" + totalPrice.toFixed(2));
            console.log(lineBreak);
            calculateInventory();
        }
        // console.log(" -- Order Summary -- ")
        // console.log("Item: " + res[0].product_name);
        // console.log("Quantity: " + quantity);
        // var totalPrice = res[0].price * quantity;
        // console.log("Order Total: $" + totalPrice.toFixed(2));
        // console.log(lineBreak);
        // calculateInventory();
    })

};

// ====================================================================================================================================================
//                            RECALCULATE INVENTORY FUNCTION
// ====================================================================================================================================================
function calculateInventory() {
    // var query = "UPDATE products SET stock_quantity = quantity WHERE item_id = productId";
    var query = "UPDATE products SET stock_quantity = stock_quantity-" + quantity + " WHERE item_id = " + productId;
    connection.query(query, function (err, res) {
    })
    setTimeout(viewInventory, 1500);
    setTimeout(purchaseQuestions, 2000);
};
// ====================================================================================================================================================
//                            
// ====================================================================================================================================================