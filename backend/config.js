const port = process.env.PORT || 5000;

const mongoDBURL = 'mongodb+srv://root:root@bookstore.naijfy8.mongodb.net/books?retryWrites=true&w=majority'



module.exports = {port,mongoDBURL}