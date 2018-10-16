var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "onlyuklb",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}

function runSearch() {
    inquirer
      .prompt({
        ID: "action",
        type: "list",
        message: "What would you like to purchase?",
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Find products":
          artistSearch();
          break;
  
        case "Search quantity":
          multiSearch();
          break;
  
        }
      });
  }