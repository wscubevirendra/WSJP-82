const mongoose = require("mongoose");
const studentLearner = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        contact: {
            type: String,
            default: null
        },
        course: {
            type: String,
            required: true,

        },
        age: {
            type: Number,
            required: true,
        },
        status: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

const Students = mongoose.model("Students", studentLearner);

module.exports = Students