const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
   
    "title":String,
    "price":Number,
    "description":String,
    "category":String,
    "image":String,
    "rate":Number,
    "count": Number
    
});


module.exports =  mongoose.model("products",productSchema);





