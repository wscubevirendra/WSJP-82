const { generateUniqueName } = require("../helper");
const ProductModel = require("../models/ProductModel");


const productController = {
    async create(req, res) {
        try {
            if (!req.body.name || !req.body.slug) {
                return res.send({ msg: "Please fill all the fields", flag: 0 })
            }
            const thumbnail = req.files.thumbnail;
            const image = generateUniqueName(thumbnail.name);
            const desntinationPath = `./public/images/product/${image}`;
            thumbnail.mv(
                desntinationPath,
                async (err) => {
                    if (err) {
                        return res.send({ msg: "Unable to upload image", flag: 0 })
                    } else {
                        const findProduct = await ProductModel.findOne({ name: req.body.name });
                        if (findProduct) {
                            return res.send({ msg: "Product already created", flag: 0 })
                        }

                        const product = new ProductModel({
                            ...req.body,
                            thumbnail: image,
                            colors: JSON.parse(req.body.colors)
                        })
                        product.save().then(() => {
                            res.send({ msg: "Product created successfully", flag: 1 })
                        }).catch((err) => {
                            res.send({ msg: "Unable to create product", flag: 0, errmsg: err.message })
                        })

                    }

                }
            )



        } catch (error) {
            res.send({ msg: "Internal Server Error", flag: 0 })

        }
    }
}

module.exports = productController;