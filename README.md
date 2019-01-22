# Eat-Da-Burger_Node-Express-Handlebars



### Purpose of App:
This project is replicating the format of an order monitor like you'd find at many fast food restaurants, used for employees to track orders yet to be made and those that are made and ready to be served.

### GIF Demonstration of App:

<img src="https://media.giphy.com/media/5t3OqxrYUta8bZEjJL/giphy.gif" alt="Gif Demonstration of App" width=100%>

### Text Walk Through:

Interacting with the MySQL database "burgers_db," the app tracks which burgers have been devoured or not devoured based on a true/false column in MySQL. The code uses binaries of "0" (false) and "1" (true) to discern which is true of a particular burger. Hitting the "DEVOUR IT!" button next to the respective burger in the "Burgers that are not devoured!" column will change the "0" to "1" in the code and update the data base with a "true" statement in the second column of the database (as can be seen in the Database Table Reference below).

To add a new burger, one simply fills in the form with the name the new burger would like to hold and hit the "Add Burger:" button.

### Data Table Reference:

Burger Name | Burger Devoured?
--- | ---
Cheese | false
Veggie | true
Steak | false

---

### Deployment

My deployed project can be seen on Heroku at the link [here](https://eat-da-burger-zuckermann.herokuapp.com/).
