//set up to connect node to musql and export connection to ORM

// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var connection = require("./orm");

// Create an instance of the express app.
var app = express();


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Andr0meda13!",
    database: "burgernomnom_db"
  });

// Make connection.
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;
  
