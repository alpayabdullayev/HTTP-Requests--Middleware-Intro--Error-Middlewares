const { News } = require("../models/newModels")


const createNews = async (req, res) => {
  const { title, description } = req.body
  try {
    if (!title) {
      return res.status(404).json({ meesage: 'Title not found' })
    }
    if (!description) {
      return res.status(404).json({ meesage: 'Description not found' })
    }
    const news = new News(title, description)
    res.status(201).json(news)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateNews = async (req, res) => {
  const { id } = req.params
  try {
    const updateNews = await News.findByIdAndUpdate(id, req.body, { new: true })
    if (!updateNews) {
      res.status(404).json({ message: 'News not found' })
    }
    res.status(200).json(updateNews)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteNews = async (req, res) => {
  const { id } = req.params
  try {
    const deleteNews = await News.findByIdAndDelete(id)
    if (!deleteNews) {
      res.status(404).json({ message: 'News not found' })
    }
    res.status(200).json(deleteNews)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getAllNews = async (req, res) => {
  try {
    const news = await News.find({})
    res.status(200).json(news)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getByIdNews = async (req, res) => {
  const { id } = req.params
  try {
    const news = await News.findById(id)
    if (!news) {
      res.status(404).json({ message: 'News not found' })
    }
    res.status(200).json(news)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports  =  { createNews, updateNews, deleteNews, getAllNews, getByIdNews }
