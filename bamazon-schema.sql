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
    VALUES ("Swiffer", "Department One", 14.99, 85),
     ("Product Two", "Department Two", 11.99, 70),
     ("Product Three", "Department Three", 9.99, 100),
     ("Product Four", "Department Four", 24.99, 58),
     ("Product Five", "Department Five", 15.99, 35),
     ("Product Six", "Department Six", 4.50, 77),
     ("Product Seven", "Department Seven", 29.99, 90),
     ("Product Eight", "Department Eight", 7.50, 80),
     ("Product Nine", "Department Nine", 8.99, 52),
     ("Product Ten", "Department Ten", 16.50, 110);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity) 
    VALUES ("Cast Iron Skillet", "Home & Kitchen", 49.85, 40),
     ("Programmable Pressure Cooker", "Home & Kitchen", 119.95, 35),
     ("Chef's Knife", "Home & Kitchen", 97.99, 75),
     ("Tea Kettle", "Home & Kitchen", 24.99, 90),
     ("Wireless Headphones", "Electronics", 54.99, 60),
     ("Roomba", "Electronics", 279.99, 25),
     ("Nest Thermostat ", "Electronics", 210.00, 50),
     ("Lawn Mower", "Garden and Outdoor", 399.00, 40),
     ("Gas Grill", "Garden and Outdoor", 159.99, 30),
     ("Garden Shears", "Garden and Outdoor", 14.50, 110);
