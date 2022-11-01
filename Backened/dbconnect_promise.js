
const mongoose = require('mongoose');


const url = 'mongodb://localhost:27017/project1';

mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false })
      .then( () => 
             {
               console.log('NODEJS TO MongoDB Connection ESTABLISH.....');
             })
      .catch( err => 
              {
               console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
               process.exit();
              }); 
    
// STEP-3 : EXPORT MODULE mongoose because we need it in other JS file
module.exports = mongoose;