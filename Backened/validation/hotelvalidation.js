const {admin} = require ('./adminschema')
module.exports = {
    addHotelValidation: async(req, res, next)=>{
        const value = await admin.validate(req.body);
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
