var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
  id: String,
  isbm: String,
  title: String,
  author: String,
  description: String,
  published_year: { type: Number, min: 1945, max: 2019 },
  publisher: String,
  updated_date: { type: Date, default: Date.now }
}); 
mongoose.set("useFindAndModify", false);
module.exports = mongoose.model("Book", BookSchema);
