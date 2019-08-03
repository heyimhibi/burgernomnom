var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

    burger.all(function(data) {
        var hbsObject = {
          burgers_table: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject); 
        
      });
      
      });
    
      console.log("test-controller");
      
    //   // 
    //   res.render("index");
    //   
    // });
    
  // Export routes for server.js to use.
  module.exports = router;
  