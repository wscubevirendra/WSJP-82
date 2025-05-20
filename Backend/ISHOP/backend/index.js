require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser")
const CategoryRouter = require('./routers/categoryRouter');
const ColorRouter = require('./routers/colorRouter');
const ProductRouter = require('./routers/productRouter');
const AdminRouter = require('./routers/adminRouter');
const UserRouter = require('./routers/userRouter');
const server = express();
server.use(express.static("public")) // Serve static files from the public directory

// Middleware
server.use(express.json());
server.use(cookieParser())
server.use(cors({ origin: "http://localhost:3000", credentials: true })); // Allow requests from frontend
server.use("/category", CategoryRouter)
server.use("/color", ColorRouter)
server.use("/product", ProductRouter)
server.use("/admin", AdminRouter)
server.use("/user", UserRouter)

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL, {
    dbName: "ISHOP"
}).then(
    () => {
        server.listen(5000, () => {
            console.log(`Server is running on http://localhost:5000`);
        });
        console.log('MongoDB connected successfully')
    }
).catch((err) => console.error('MongoDB connection error:', err));


