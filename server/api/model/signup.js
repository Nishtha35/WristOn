const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let logins = new Schema({
    username: {
        type: String
    },
    userpass: {
        type: String
    },
    useremail: {
        type: String
    },

},
);
module.exports = mongoose.model('lgn', logins); 