const CategoryModel = require("../models/categoryModel")

const categoryController = {
    create(req, res) {
        try {

            if (!req.body.name || !req.body.slug) {
                return res.send({ msg: "Please fill all the fields", flag: 0 })
            }

            const category = new CategoryModel({
                name: req.body.name,
                slug: req.body.slug,
            })
            category.save().then(() => {
                res.send({ msg: "Category created successfully", flag: 1 })
            }).catch((err) => {
                res.send({ msg: "Unable to create category", flag: 0,errmsg: err.message })
            })


        } catch (error) {
            res.send({ msg: "Internal Server Error", flag: 0 })

        }
    }
}

module.exports = categoryController;