const mongoose = require('mongoose');
const productSchema= mongoose.Schema({
    name:String,
    price:Number,
    qty:Number
},{timestamps : true});

module.exports= mongoose.model("products",productSchema);
