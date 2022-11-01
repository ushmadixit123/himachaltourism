const joi = require('@hapi/joi');

const schema ={
    admin: joi.object( {
        
        firstname: joi.string().max(50),
        lastname: joi.string().max(50),
        address: joi.string().max(50),
        city: joi.string().max(50),
        state: joi.string().max(50),
        pincode: joi.number(),
        phonenumber: joi.number().integer().min(1000000000).message("invalid phone number").max(9999999999).message("invalid phone number"),
        email: joi.string().email(),
        checkindate: joi.string(),
        numberofdays: joi.number(),
        
    }),
    
};

module.exports = schema; 