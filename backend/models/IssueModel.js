const {Schema,model}= require('../connection');
// structure of model
const mySchema = new Schema({
      title:String,
      type: String,
      assignedTo:String,
      team:String,
      status: {type : String, default : 'pending'},
      assignedBy:String,
      assignedTo: String,
      createdAt:Date
      
})
// name of collection
module.exports = model('issue',mySchema);