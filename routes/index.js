var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

mongoose
  .connect("mongodb://localhost/node-graphql", {
    promiseLibrary: require("bluebird"),
    useNewUrlParser: true
  })
  .then(() => console.log("connections successful"))
  .catch(err => console.log(err));
