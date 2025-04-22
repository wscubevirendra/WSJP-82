const express = require('express');
const CategoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

CategoryRouter.post("/create", categoryController.create);

module.exports = CategoryRouter;