const express = require('express');
const userRouter = require('./Router/userRouter');
const issueRouter = require('./Router/issueRouter');
const cors = require('cors');

// two type of path
// 1. Relative Path - ../videos
// 2. Absolute Path - c:/users/videos

const app = express();
const port = 5000;

// middleware
// to convert json to javascript
app.use(express.json());

app.use(cors({
    origin : [ 'http://localhost:3000' ]
}));

app.use('/user', userRouter);
app.use('/issue', issueRouter);
// app.use('/product', productRouter);
// localhost:5000/user/add

// routes or endpoints
app.get('/', (req, res) => {
    // to generate string response
    res.send('Response from express');
    // db operation
})

app.get('/add', (req, res) => {
    res.send('response from add');
})

app.listen(port, () => {
    console.log('express server started..');
});