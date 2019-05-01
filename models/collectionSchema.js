const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    collection_owner: { type: String, required: true },
    item_id: { type: String, required: null},
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;