const { generateUniqueName } = require("../helper");
const ProductModel = require("../models/ProductModel");
const { unlinkSync } = require('fs')


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
    },
    async read(req, res) {
        try {
            const id = req.params.id;
            let products = null;
            if (id) {
                products = await ProductModel.findById(id);
            } else {
                products = await ProductModel.find().sort({ createdAt: -1 });
            }


            res.send({ msg: "Product find", products, total: Array.isArray(products) ? products.length : 1, flag: 1 })

        } catch (error) {
            res.send({ msg: "Internal Server Error", flag: 0 })
        }

    },
    async status(req, res) {
        try {
            const id = req.params.id;
            const flag = req.body.flag;
            const product = await ProductModel.findById(id);
            let message;
            if (product) {
                const productStatus = {};
                if (flag == 1) {
                    productStatus.topSelling = !product.topSelling;
                    message = "Top Selling Update"
                } else if (flag == 2) {
                    productStatus.stock = !product.stock
                    message = "Stock Update"

                } else if (flag == 3) {
                    productStatus.status = !product.status
                    message = "Status Update"

                }

                console.log(productStatus)


                await ProductModel.updateOne(
                    {
                        _id: id
                    },
                    {
                        $set: productStatus
                    }
                ).then(
                    () => {
                        res.send({ msg: message, flag: 1 })

                    }
                ).catch(
                    () => {
                        res.send({ msg: "Unable to update Status", flag: 0 })
                    }
                )


            } else {
                res.send({ msg: "Unable to find product", flag: 0 })
            }

        } catch (error) {
            res.send({ msg: "Internal Server Error", flag: 0 })
        }

    },
    async delete(req, res) {
        try {
            const id = req.params.id;
            const product = await ProductModel.findById(id);
            if (product) {
                await ProductModel.deleteOne({ _id: id }).then(
                    () => {
                        const imagePath = `./public/images/product/${product.thumbnail}`;
                        unlinkSync(imagePath)
                        res.send({ msg: "Product deleted ", flag: 1 })

                    }
                ).catch(
                    (error) => {
                        console.log(error)
                        res.send({ msg: "Unable to deleted product   ", flag: 0 })

                    }
                )

            } else {
                res.send({ msg: "product not found ", flag: 0 })
            }

        } catch (error) {
            res.send({ msg: "Internal Server Error", flag: 0 })

        }
    },
    async multipleImage(req, res) {

        try {
            const id = req.params.id;
            const images = req.files.image
            console.log(images)
            const product = await ProductModel.findById(id);
            if (!product) {
                res.send({ msg: "product not found ", flag: 0 })
            }

            let allimages = product.images ?? [];
            let uplaodPromise = [];

            for (let image of images) {
                const img = generateUniqueName(image.name);
                const desntinationPath = `./public/images/product/${img}`;
                allimages.push(img)
                uplaodPromise.push(image.mv(desntinationPath))

            }

            await Promise.all(uplaodPromise)
            await ProductModel.updateOne(
                { _id: id },
                {
                    images: allimages
                }
            )
            await res.send({ msg: "Product image upload ", flag: 1 })


        } catch (error) {
            console.log(error)
            res.send({ msg: "Internal Server Error", flag: 0 })

        }
    },




}

module.exports = productController;