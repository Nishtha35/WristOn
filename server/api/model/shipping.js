const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ship = new Schema({
    fullname: {
        type: String
    },
    emaill: {
        type: String
    },
    mno: {
        type: Number
    },
    ad: {
        type: String
    }
   

},
);
module.exports = mongoose.model('shipping', ship); 