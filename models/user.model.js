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
        email: 'yazan-ahmed1999a@outlook.com',
        books: [
            { name: 'CSS ' , description:'web', status:'Available'},
            { name: 'JS' , description:'web', status:'Available'},
            { name: 'html' , description:'web', status:'Available'}
        ]
    });

    console.log(newUser);

    newUser.save();

}

// seedUserData();

module.exports = userModel;