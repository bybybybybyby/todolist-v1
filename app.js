const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");  // binds all exports to const date

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));    // public is the folder name

const items = ["Buy food", "Cook food", "Eat food"];  // set array to const, still allows items to be pushed/modified inside array, but can't assign a new array.
const workItems = [];

app.get("/", function(req, res) {

  const day = date.getDate();  // call the function that is bound to const date, and getDate function is activated

  // res.render is for using the ejs file.
  // Render a file called list (in views folder), and pass the file a variable called listTitle...
  res.render("list", {
    listTitle: day, newListItems: items
  });

});

app.post("/", function(req, res) {
  const item = req.body.newItem;  // Takes input from list.ejs when use presses button.

  if (req.body.list === "Work List") {
    workItems.push(item);  // Update workItems array to add the new item.
    res.redirect("/work");    // Instead of trying to res.render again, redirect to /work route.
  } else {
    items.push(item);  // Update items array to add the new item.
    res.redirect("/");    // Instead of trying to res.render again, redirect to home route.
  }

});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

// app.post("/work", function(req, res) {
//   let item = req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// });

app.get("/about", function(req,res) {
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
