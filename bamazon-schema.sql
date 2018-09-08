DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products
(
    item_id INT NOT NULL,
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




-- INSERT INTO products (product_name, department_name, price, stock_quantity) 
--     VALUES ("Swiffer", "Department One", 14.99, 85);

-- INSERT INTO products (product_name, department_name, price, stock_quantity) 
--     VALUES ("Product Two", "Department Two", 11.99, 70);

-- INSERT INTO products (product_name, department_name, price, stock_quantity) 
--     VALUES ("Product Three", "Department Three", 9.99, 100);

-- INSERT INTO products (product_name, department_name, price, stock_quantity) 
--     VALUES ("Product Four", "Department Four", 24.99, 58);

-- INSERT INTO products (product_name, department_name, price, stock_quantity) 
--     VALUES ("Product Five", "Department Five", 15.99, 35);

-- INSERT INTO products (product_name, department_name, price, stock_quantity) 
--     VALUES ("Product Six", "Department Six", 4.50, 77);

-- INSERT INTO products (product_name, department_name, price, stock_quantity) 
--     VALUES ("Product Seven", "Department Seven", 29.99, 90);

-- INSERT INTO products (product_name, department_name, price, stock_quantity) 
--     VALUES ("Product Eight", "Department Eight", 7.50, 80);

-- INSERT INTO products (product_name, department_name, price, stock_quantity) 
--     VALUES ("Product Nine", "Department Nine", 8.99, 52);

-- INSERT INTO products (product_name, department_name, price, stock_quantity) 
--     VALUES ("Product Ten", "Department Ten", 16.50, 110);
