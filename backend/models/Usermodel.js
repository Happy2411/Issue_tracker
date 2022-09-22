const {Schema,model}= require('../connection');
// structure of model
const mySchema = new Schema({
      name:String,
      age:Number,
      email:String,
      password: Number
})
// name of collection
module.exports = model('users',mySchema);