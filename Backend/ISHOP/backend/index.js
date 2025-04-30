const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CategoryRouter = require('./routers/categoryRouter');
const ColorRouter = require('./routers/colorRouter');
const ProductRouter = require('./routers/productRouter');
const server = express();
server.use(express.static("public")) // Serve static files from the public directory

// Middleware
server.use(express.json());
server.use(cors({ origin: "http://localhost:3000" })); // Allow requests from frontend
server.use("/category", CategoryRouter)
server.use("/color", ColorRouter)
server.use("/product", ProductRouter)

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/", {
    dbName: "ISHOP"
}).then(
    () => {
        server.listen(5000, () => {
            console.log(`Server is running on http://localhost:5000`);
        });
        console.log('MongoDB connected successfully')
    }
).catch((err) => console.error('MongoDB connection error:', err));


