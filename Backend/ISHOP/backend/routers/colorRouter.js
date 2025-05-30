const express = require('express');
const ColorRouter = express.Router();
const colorController = require('../controllers/colorController');

ColorRouter.post("/create", colorController.create);
ColorRouter.get("/:id?", colorController.read);
ColorRouter.delete("/delete/:id", colorController.delete)
ColorRouter.patch("/status/:id", colorController.statusUpdate)
ColorRouter.put("/update/:id", colorController.update)

module.exports = ColorRouter;