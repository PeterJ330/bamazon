DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products
(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(50)NULL,
    department_name VARCHAR(50)NULL,
    price DECIMAL(10,2)NULL,
    stock_quantity INT (5)NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
    VALUES ("Cast Iron Skillet", "Home & Kitchen", 49.85, 50),
     ("Programmable Pressure Cooker", "Home & Kitchen", 119.95, 30),
     ("Chef's Knife", "Home & Kitchen", 97.99, 40),
     ("Tea Kettle", "Home & Kitchen", 24.99, 60),
     ("Wireless Headphones", "Electronics", 54.99, 80),
     ("Roomba", "Electronics", 279.99, 25),
     ("Nest Thermostat ", "Electronics", 210.00, 35),
     ("Lawn Mower", "Garden and Outdoor", 399.00, 15),
     ("Gas Grill", "Garden and Outdoor", 159.99, 20),
     ("Garden Shears", "Garden and Outdoor", 14.50, 100);


SELECT * FROM products;