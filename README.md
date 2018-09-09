# bamazon
bamazon is a node application that simulates an online shopping platform.

Ten products were created in a MySQL Database named "bamazon".

Each product in the "products" table has the following attributes (column values):
    * item_id
    * product_name
    * department_name
    * price
    * stock_quantity

The following occurs when the user enters "node bamazonCustomer.js" in the command line:
* Welcome message is displayed: " ** Welcome to Bamazon ** "

* Inventory table is displayed showing the available products and their attributes:
![Image of Opening Screen]
(https://github.com/PeterJ330/bamazon/blob/master/images/initial_inventory.png)
    
* After the initial inventory table is displayed the User will be prompted to Enter the ID of the product
    they want to purchase.
* Once a product has been selected, the application will prompt the User to enter the quantity of the item
    they would like to purchase. 
![Image of the first two prompts]
(https://github.com/PeterJ330/bamazon/blob/master/images/first_two_prompts.png)
    
* After a product and quantity have been selected, the application will display the User's order summary
    containing the product_name, quantity and the Order Total:
![Image of Order Summary]
(https://github.com/PeterJ330/bamazon/blob/master/images/order_summary.png)

* Once the Order Summary has displayed, a new inventory table will be displayed which will reflect the
    decrease in inventory based on the User's product selection and quantity purchased.

note: If the quantity the user selected is greater than the quantity in stock then the application will
    display the following message:
        * "Insufficient quantity. There are "+ res[0].stock_quantity +" "+ res[0].product_name + "(s) left in stock."
        * The user will then be prompted again to choose a product for purchasing.


#### The following is data copied from the terminal displaying the output of the above actions...
                                        ** Welcome to Bamazon **
                                            Current Inventory
                            +--+----------------------------+-------+--------+
                            |ID|             Name           |Price  |In Stock|
                            |1 |Cast Iron Skillet           |$49.85 |50      |
                            |2 |Programmable Pressure Cooker|$119.95|30      |
                         ** |3 |Chef's Knife                |$97.99 |40      | 
                            |4 |Tea Kettle                  |$24.99 |60      |
                            |5 |Wireless Headphones         |$54.99 |80      |
                            |6 |Roomba                      |$279.99|25      |
                            |7 |Nest Thermostat             |$210.00|35      |
                            |8 |Lawn Mower                  |$399.00|15      |
                            |9 |Gas Grill                   |$159.99|20      |
                            |10|Garden Shears               |$14.50 |100     |
                            +--+----------------------------+-------+--------+


                            ? Enter the ID of the product you would like to purchase. 3
                            ? How many units would you like? 6


                            -- Order Summary -- 
                            Item: Chef's Knife
                         ** Quantity: 6
                            Order Total: $587.94


                                            Current Inventory
                            +--+----------------------------+-------+--------+
                            |ID|             Name           |Price  |In Stock|
                            |1 |Cast Iron Skillet           |$49.85 |50      |
                            |2 |Programmable Pressure Cooker|$119.95|30      |
                         ** |3 |Chef's Knife                |$97.99 |34      |
                            |4 |Tea Kettle                  |$24.99 |60      |
                            |5 |Wireless Headphones         |$54.99 |80      |
                            |6 |Roomba                      |$279.99|25      |
                            |7 |Nest Thermostat             |$210.00|35      |
                            |8 |Lawn Mower                  |$399.00|15      |
                            |9 |Gas Grill                   |$159.99|20      |
                            |10|Garden Shears               |$14.50 |100     |
                            +--+----------------------------+-------+--------+
========================================================================================                            

                                        ** Welcome to Bamazon **
                                            Current Inventory
                            +--+----------------------------+-------+--------+
                            |ID|             Name           |Price  |In Stock|
                            |1 |Cast Iron Skillet           |$49.85 |50      |
                            |2 |Programmable Pressure Cooker|$119.95|30      |
                            |3 |Chef's Knife                |$97.99 |40      |
                            |4 |Tea Kettle                  |$24.99 |60      |
                            |5 |Wireless Headphones         |$54.99 |80      |
                            |6 |Roomba                      |$279.99|25      |
                            |7 |Nest Thermostat             |$210.00|35      |
                         ** |8 |Lawn Mower                  |$399.00|15  **  |
                            |9 |Gas Grill                   |$159.99|20      |
                            |10|Garden Shears               |$14.50 |100     |
                            +--+----------------------------+-------+--------+


                            ? Enter the ID of the product you would like to purchase. 8
                            ? How many units would you like? 20 **


                            Insufficient quantity. There are 15 Lawn Mower(s) left in stock.
========================================================================================

                                
