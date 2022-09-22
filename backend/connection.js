const mongoose = require('mongoose');

const dbName = 'wss1200';
const url = `mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/${dbName}?retryWrites=true&w=majority`;

// asynchronous functions - returns promise 
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;