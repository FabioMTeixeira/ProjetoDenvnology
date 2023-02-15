const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

exports.List = mongoose.model("List", ListSchema);
