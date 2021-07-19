const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let feedback = new Schema({
    fname: {
        type: String
    },
    msg: {
        type: String
    }
},
);
module.exports = mongoose.model('fdbk', feedback); 