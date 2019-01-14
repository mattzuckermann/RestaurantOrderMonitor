// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten");

    var newEatenState = {
      devoured: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function () {
        console.log("changed eaten to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#burgerSubmit").on("click", function (event) {
    if ($("#ca").val() === "") {
      alert("The 'Add Burger' input field cannot be empty! Please try again.")
    } else {
      event.preventDefault();

      var newBurger = {
        burger_name: $("#ca").val().trim(),
        burger_devoured: 0
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }
  });
});
