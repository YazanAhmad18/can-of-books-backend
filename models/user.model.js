'use strict';

const mongoose = require('mongoose');
const booksSchema = require('./books.model');

const userSchema = new mongoose.Schema({
    email: { type: String },
    books: [booksSchema]
});

const userModel = mongoose.model('users', userSchema);

const seedUserData = () => {
    const newUser = new userModel({
        email: 'yazanahmad1999187@gmail.com',
        books: [
            { name: 'php' , description:'For web', status:'Available' , url : 'https://m.media-amazon.com/images/I/41WqNryqTlL.jpg'},
            { name: 'css' , description:'For web', status:'Available' , url : 'https://static.packt-cdn.com/products/9781787281585/cover/smaller'},
            { name: 'js' , description:'For web', status:'Available' , url : 'https://www.tripwiremagazine.com/wp-content/uploads/2016/10/Introducing-html_thumb.jpg'}
        ]
    });

    console.log(newUser);

    newUser.save();
}

// seedUserData();

module.exports = {userModel , seedUserData};