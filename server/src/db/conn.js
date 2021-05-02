const mongoose = require('mongoose');
const DB = process.env.Db_key;


 mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log("Connected to the Database")
}).catch((e)=>{
    console.log(`Error in Database is ${e}`)
    
})