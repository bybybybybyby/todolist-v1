const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));    // public is the folder name

var items = ["Buy food", "Cook food", "Eat food"];

app.get("/", function(req, res) {

  var today = new Date();

  // options for formatting the date how we want
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  // res.render is for using the ejs file.
  // Render a file called list (in views folder), and pass the file a variable called kindOfDay with the value of day.
  res.render("list", {
    kindOfDay: day, newListItems: items
  });

});

app.post("/", function(req, res) {
  var item = req.body.newItem;  // Takes input from list.ejs when use presses button.
  items.push(item);  // Update items array to add the new item.
  res.redirect("/");    // Instead of trying to res.render again, redirect to home route.
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
