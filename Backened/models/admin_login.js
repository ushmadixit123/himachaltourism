const AdminLogin_mongoose = require('mongoose');

const AdminLogin = AdminLogin_mongoose.Schema(
    {
       phonenumber: { type: Number },
       password: { type: Number },
    }, 
    {
       timestamps: true
    }
    );

module.exports = AdminLogin_mongoose.model('admin_login',  AdminLogin);
