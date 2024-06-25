const express = require('express');
const { getAllNews, getByIdNews, deleteNews, createNews, updateNews } = require('../controllers/newsController');


const router = express.Router()

router.get('/news', getAllNews)
router.get('/news/:id', getByIdNews)
router.delete('/news/:id', deleteNews)
router.post('/create-news', createNews)
router.put('/news/:id', updateNews)


module.exports = {router}