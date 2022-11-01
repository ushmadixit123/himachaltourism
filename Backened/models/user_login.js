const login_mongoose = require('mongoose');

const Userlogin = login_mongoose.Schema(
    {
       email: { type: String },
       password: { type: String },
    }, 
    {
       timestamps: true
    }
    );

module.exports = login_mongoose.model('user_login',  Userlogin);
