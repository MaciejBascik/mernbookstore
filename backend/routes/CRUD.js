const express = require('express')
const router = express.Router()
let {deleteBook, updateBook, getOneBook, postBooks, getBooks} = require('../controllers/methods')

router.route('/').get(getBooks).post(postBooks)
router.route('/:id').get(getOneBook).put(updateBook).delete(deleteBook)

module.exports = router