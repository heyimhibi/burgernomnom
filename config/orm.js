
// Import MySQL connection.
var connection = require("../config/connections.js");

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM burgers_table";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
  });
},
create: function(tableInput,  cb){
  var queryString = ("INSERT INTO burgers_table (buger_name) VALUES ('new')");
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    cb(result);
  });
  
  console.log (queryString);
},
}
// console.log ("test-orm");
// console.log(queryString);
// console.log(burgers_table);


    // var queryString = "SELECT * FROM " + currentburgers + ";";
    // connection.query(queryString, function(err, result) {
    //   if (err) {
    //     throw err;
    //   }
    //   cb(result);
      // console.log(queryString);
    // };
  // });
// };
  // },
  // create: function(burgers_table, cols, vals, cb) {
  //   var queryString = "INSERT INTO " + burgers_table;

  //   queryString += " (";
  //   queryString += cols.toString();
  //   queryString += ") ";
  //   queryString += "VALUES (";
  //   queryString += printQuestionMarks(vals.length);
  //   queryString += ") ";

    // console.log(queryString);

    // connection.query(queryString, vals, function(err, result) {
    //   if (err) {
    //     throw err;
    //   }

    //   cb(result);
    // });
  // },
  // An example of objColVals would be {name: panther, sleepy: true}
  // update: function(burgers_table, objColVals, condition, cb) {
  //   var queryString = "UPDATE " + burgers_table;

  //   queryString += " SET ";
  //   queryString += objToSql(objColVals);
  //   queryString += " WHERE ";
  //   queryString += condition;

  //   console.log(queryString);
  //   connection.query(queryString, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // },
  // delete: function(burgers_table, condition, cb) {
  //   var queryString = "DELETE FROM " + burgers_table;
  //   queryString += " WHERE ";
  //   queryString += condition;

  //   connection.query(queryString, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
    // });
  // }
// };

// Export the orm object for the model (cat.js).
module.exports = orm;
  