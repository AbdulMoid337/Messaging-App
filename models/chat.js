const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type : String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLenth: 50,
    },
    created_at: {
        type: Date,
        required: true,
    },
    updated_at : Date
}, { timestamps: true });

const Chat = mongoose.model("chat", chatSchema);
module.exports = Chat