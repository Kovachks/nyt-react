const mongoose = require("mongoose");
const schema = mongoose.Schema;

const articleSchema = new schema({
    title: {type: String, required: true},
    date: {type: Date, default: Date.now},
    url: {type: String}
});

const Article = mongoose.model("Article", articleSchema)

module.exports = Article;