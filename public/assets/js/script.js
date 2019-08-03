$( document ).ready(function() {
    console.log( "ready!" );

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: "test"
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgeradded", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});