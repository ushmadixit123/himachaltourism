const joi = require('@hapi/joi');

const schema = {
    user: joi.object( {
        
        username: joi.string().max(50).min(3),
        email: joi.string().email().lowercase().required(),
        
        phonenumber: joi.number().integer().min(1000000000).message("invalid phone number").max(9999999999).message("invalid phone number"),
        password: joi.string().pattern(new RegExp("^[a-zA-z0-9]{3,10}$")),
        
    })
    
};

module.exports = schema; 