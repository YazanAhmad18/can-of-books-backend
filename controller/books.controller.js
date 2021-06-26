'use strict';


const { userModel } = require('../models/user.model');

const getBooks = (request, response) => {

    const { email } = request.query;
    userModel.find({ email }, (error, user) => {
        if (error) {
            response.send(error)
        } else {
            response.json(user)
        }
    });
}

const creatBook = (request, response) => {
    const { email, bookName , description , status , url } = request.body;  

    userModel.findOne({ email: email }, (error, userData) => {  
        if (error) {
            response.send(error);
        } else {
            console.log(userData.books);
            userData.books.push({ 
                name: bookName,
                description, 
                status,
                url
            });
            userData.save();
            response.json(userData);
        }
    })
}


const updateBook = (request, response) => {
    const index = request.params.book_idx;
    const { email, bookName , description , status , url } = request.body;

    userModel.findOne({ email: email }, (error, userData) => {
        if (error) {
            response.send(error);
        } else {
            userData.books.splice(index, 1, { 
                name: bookName ,
                description, 
                status,
                url
            });
            userData.save();
            response.send(userData);
        }
    });
}

const deleteBook = (request, response) => {
    const index = request.params.book_idx;
    const { email }  = request.query;
    console.log(request.query);

    userModel.findOne({ email: email }, (error, userData) => {

        if (error) {
            response.send(error);
        } else {      
            userData.books.splice(index, 1);
            userData.save();
            response.send(userData);
        }
    });
}

module.exports = { getBooks, creatBook, updateBook, deleteBook };