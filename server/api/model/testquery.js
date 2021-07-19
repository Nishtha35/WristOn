const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    name: {
        type: String
    },
    avail: {
        type: String
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    }
},

);

// let logins = new Schema({
//     username: {
//         type: String
//     },
//     userpass: {
//         type: String
//     },
//     useremail: {
//         type: String
//     },
//     // address: {
//     //     type: String
//     // },
//     // email:{
//     //     type:String
//     // }
// },
// );
module.exports = mongoose.model('User', user); 