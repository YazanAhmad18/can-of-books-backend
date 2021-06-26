const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT;
const {getBooks, creatBook , updateBook, deleteBook} = require('./controller/books.controller');
const {seedUserData} = require('./models/user.model');
const cors = require('cors'); 

app.use(cors());


app.use(express.json()); 

mongoose.connect('mongodb://localhost:27017/myFavoriteBooks',
{ useNewUrlParser: true, useUnifiedTopology: true }
);


app.get('/', (req, res) => {
    res.send('Your API Server is running now');
});



app.get('/books', getBooks );  

app.post('/book' , creatBook); 

app.put('/book/:book_idx' , updateBook);  

app.delete('/book/:book_idx' , deleteBook);  


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
