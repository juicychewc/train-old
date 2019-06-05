const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
    collection_owner: { type: String, required: true },
    item_id: { type: String, required: true },
    item_name: { type: String, required: true },
    item_type: { type: String, required: true },
    item_quantity: { type: Number, required: null },
    item_picture: { type: String, required: null },
    item_manufacturer: { type: String, required: true },
    item_value: { type: Number, required: null },
    item_condition: { type: String, required: null },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;