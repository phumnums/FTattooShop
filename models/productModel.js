const mongoose = require("mongoose");
const { Schema } = mongoose;

const products = new Schema({
  productImg: {
    type: String,
    
  },
  productName: {
    type: String,
    
  },
  price: {
    type: Number,
    
  },
});

module.exports = mongoose.model("products", products)