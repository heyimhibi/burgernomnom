var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {

    burger.all(function(data) {
        var hbsObject = {
          burgers_table: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject); 
        
      });
      
      });

      router.post("/api/burgeradded", function(req, res) {
        burger.create([
          "burger_name", "devour"]),
         
          [
            req.body.burger_name, req.body.devour
          ], function(result) {
            // Send back the ID of the new quote
            res.json({ id: result.insertId });
          console.log(result);
        };
      });
      console.log("test-controller");

    
  // Export routes for server.js to use.
  module.exports = router;
  