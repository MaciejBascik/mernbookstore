const Book = require('../models/bookModel.js')

const getBooks = async (req,res) => {
    try {
        const books = await Book.find()
        res.status(200).json({count: books.length, data:books})
    } catch (error) {
        console.log(error.message);
        res.status(401).send({message: error.message})
    }
}

const postBooks = async (req,res) => {
    try {
        if(!req.body.title || 
           !req.body.author ||
           !req.body.type ||
           !req.body.publishYear) {
            return res.status(400).json({error: "Missing fields"});
           }
           const newBook = {
            title : req.body.title,
            type: req.body.type,
            author: req.body.author,
            publishYear: req.body.publishYear
           };
           const book = await Book.create(newBook)
           return res.status(201).json({message: "Added successfully", data: book})
    } catch (error) {
        console.log(error.message);
        res.status(401).json({message: error.message})
    }
}

const getOneBook = async (req,res) => {
    try {
        const id= req.params.id;
        const book = await Book.findById(id)
        if(!book) {
            return res.status(404).json("Book not found")
        }
        return res.status(200).json({data:book})
    } catch (error) {
        console.log(error.message);
        return res.status(401).json({message: error.message})
    }
}

const updateBook = async (req,res) => {
    try {
        if(!req.body.title || 
            !req.body.author ||
            !req.body.type ||
            !req.body.publishYear) {
             return res.status(400).json({error: "Missing fields, required: title,author,type,publishYear"});
            }
            const id= req.params.id;
            const result = await Book.findByIdAndUpdate(id, req.body)
            if (!result) {
                return res.status(404).json({message: "Book not found"})

            }
        return res.status(200).json({message: "updated successfully", data: result})


    } catch (error) {
        console.log(error.message);
        res.status(401).json({message: error.message})
    }
}

const deleteBook = async (req,res) => {
    try {
            const id= req.params.id;
            const result = await Book.findByIdAndDelete(id)
            if (!result) {
                return res.status(404).json({message: "Book not found"})

            }
        return res.status(200).json({message: "deleted successfully", data: result})


    } catch (error) {
        console.log(error.message);
        res.status(401).json({message: error.message})
    }
}

module.exports = {deleteBook, updateBook, getOneBook, postBooks, getBooks}