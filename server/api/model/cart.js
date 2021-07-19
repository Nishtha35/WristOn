const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Addtocart=new Schema({
    watchname:{
        type:String
    },
    price:{
        type:Number
    },
    image:{
        type:String
    }
 });

module.exports = mongoose.model('product',Addtocart); 