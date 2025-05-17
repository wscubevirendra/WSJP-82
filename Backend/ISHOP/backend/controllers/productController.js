const { generateUniqueName } = require("../helper");
const ProductModel = require("../models/ProductModel");
const CategoryModel = require("../models/categoryModel");
const ColorModel = require("../models/colorModel");
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

        // Fetch single product by ID first
        if (id) {
            const product = await ProductModel.findById(id).populate(["categoryId", "colors"]);
            if (!product) {
                return res.send({ msg: "Product not found", products: null, total: 0, flag: 1 });
            }
            return res.send({ msg: "Product found", products: product, total: 1, flag: 1 });
        }

        // Build filter query
        const filterQuery = {};

        // Category Filter
        if (req.query.category) {
            const category = await CategoryModel.findOne({ slug: req.query.category });
            if (category) {
                filterQuery.categoryId = category._id;
            } else {
                return res.send({ msg: "Category not found", products: [], total: 0, flag: 1 });
            }
        }

        // Color Filter
        if (req.query.color) {
            const color = await ColorModel.findOne({ slug: req.query.color });
            if (color) {
                filterQuery.colors = { $in: [color._id] };
            } else {
                return res.send({ msg: "Color not found", products: [], total: 0, flag: 1 });
            }
        }

        // Price Filter
        if (req.query.minPrice || req.query.maxPrice) {
            const priceFilter = {};
            if (req.query.minPrice) priceFilter.$gte = parseFloat(req.query.minPrice);
            if (req.query.maxPrice) priceFilter.$lte = parseFloat(req.query.maxPrice);

            // Make sure you’re filtering on correct field name (price or finalPrice)
            filterQuery.finalPrice = priceFilter;
        }

        // Limit handling
        const limit = req.query.limit ? parseInt(req.query.limit) : 0;

        // Fetch filtered products
        const products = await ProductModel.find(filterQuery).limit(limit).populate(["categoryId", "colors"]).lean();

        // Response
        res.send({
            msg: "Product found",
            products,
            total: products.length,
            flag: 1
        });

    } catch (error) {
        console.error("Error in Product Read API:", error);
        res.status(500).send({ msg: "Internal Server Error", flag: 0 });
    }
}

    ,
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