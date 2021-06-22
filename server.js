const express = require('express'); // require the express package
const app = express(); // initialize your express app instance
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const getBooks = require('./controller/books.controller');
const cors = require('cors');


app.use(cors());


mongoose.connect('mongodb://localhost:27017/myFavoriteBooks',
{ useNewUrlParser: true, useUnifiedTopology: true }
);


app.get('/', (req, res) => {
    res.send('Your API Server is running now');
});

app.get('/books', getBooks );

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
