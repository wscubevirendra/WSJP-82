const { generateUniqueName } = require("../helper");
const CategoryModel = require("../models/categoryModel");
const fs = require("fs");

const categoryController = {
    async create(req, res) {
        try {

            if (!req.body.name || !req.body.slug || !req.files.categoryImage) {
                return res.send({ msg: "Please fill all the fields", flag: 0 })
            }

            const categoryImage = req.files.categoryImage;
            const category_image = generateUniqueName(categoryImage.name);
            const desntinationPath = `./public/images/category/${category_image}`;
            categoryImage.mv(
                desntinationPath,
                async (err) => {
                    if (err) {
                        return res.send({ msg: "Unable to upload image", flag: 0 })
                    } else {
                        const findCategory = await CategoryModel.findOne({ name: req.body.name });
                        if (findCategory) {
                            return res.send({ msg: "Category already created", flag: 0 })
                        }

                        const category = new CategoryModel({
                            name: req.body.name,
                            slug: req.body.slug,
                            categoryImage: category_image
                        })
                        category.save().then(() => {
                            res.send({ msg: "Category created successfully", flag: 1 })
                        }).catch((err) => {
                            res.send({ msg: "Unable to create category", flag: 0, errmsg: err.message })
                        })

                    }

                }
            )





        } catch (error) {
            res.send({ msg: "Internal Server Error", flag: 0 })

        }
    },

    async read(req, res) {
        try {
            const id = req.params.id;
            let categories = null;
            if (id) {
                categories = await CategoryModel.findById(id);
            } else {
                categories = await CategoryModel.find().sort({ createdAt: -1 });
            }


            res.send({ msg: "Categories find", categories, flag: 1 })

        } catch (error) {
            res.send({ msg: "Internal Server Error", flag: 0 })
        }

    },


    async delete(req, res) {
        try {
            const Id = req.params.id;
            const category = await CategoryModel.findById(Id);
            if (category) {
                await CategoryModel.deleteOne({ _id: Id }).then(
                    () => {
                        const imagePath = `./public/images/category/${category.categoryImage}`;
                        fs.unlinkSync(imagePath)
                        res.send({ msg: "Category deleted ", flag: 1 })

                    }
                ).catch(
                    () => {
                        res.send({ msg: "Unable to deleted category   ", flag: 0 })

                    }
                )

            } else {
                res.send({ msg: "Deleted category not found ", flag: 0 })
            }

        } catch (error) {
            res.send({ msg: "Internal Server Error", flag: 0 })

        }
    },

    async statusUpdate(req, res) {
        try {
            const Id = req.params.id;
            const category = await CategoryModel.findById(Id);
            console.log(category)
            if (category) {
                await CategoryModel.updateOne({ _id: Id }, { $set: { status: !category.status } }).then(
                    () => {
                        res.send({ msg: "Category status updated", flag: 1 })
                    }
                ).catch(
                    () => {
                        res.send({ msg: "Unable to update category status", flag: 0 })
                    }
                )
            } else {
                res.send({ msg: "Category not found", flag: 0 })
            }

        } catch (error) {
            res.send({ msg: "Internal Server Error", flag: 0 })
        }

    },

    async update(req, res) {
        try {

            const categoryId = req.params.id;
            await CategoryModel.findByIdAndUpdate(
                {
                    _id: categoryId
                },
                {
                    name: req.body.name,
                    slug: req.body.slug
                }
            ).then(
                () => {
                    res.send({ msg: "Category Update Successfully", flag: 1 })
                }
            ).catch(
                () => {
                    res.send({ msg: "Unable to Update Category ", flag: 0 })

                }
            )

        } catch (error) {
            res.send({ msg: "Internal Server Error", flag: 0 })
        }
    }
}

module.exports = categoryController;