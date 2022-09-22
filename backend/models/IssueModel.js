const {Schema,model}= require('../connection');
// structure of model
const mySchema = new Schema({
      title:String,
      type: String,
      assignedTo:String,
      team:String,
      assignBy:String,
      CreatedAt:String,
      Date:Number,
      
})
// name of collection
module.exports = model('users',mySchema);