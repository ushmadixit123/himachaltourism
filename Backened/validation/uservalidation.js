const {user} = require ('./userschema')
module.exports = {
    addUserValidation: async(req, res, next)=>{
        const value = await user.validate(req.body);
        if(value.error){
            res.json({
                success:-1,
                message:value.error.details[0].message
            })
        }
        else{
        
            next();
        }
    }
}
