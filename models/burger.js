// Dependencies


// Creates a "burger" model that matches up with DB
// -own custom orm-
//create call that will call ORM functions

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
      
      console.log(res);
    });
    console.log ("test-burger.js");
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  // update: function(objColVals, condition, cb) {
  //   orm.update("burger", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // },
  // delete: function(condition, cb) {
  //   orm.delete("burger", condition, function(res) {
  //     cb(res);
  //   });
  // }
};


// Makes the BurgernewBurger Model available for other files (will also create a table)
module.exports = burger;

// ideally I would've set up all the connections to be able to post, delete but I couldn't figure out how the ORM was supposed to work