const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_name: { type: String, unique: true, required: true, trim: true},
    user_firstName: { type: String, required: true, trim: true },
    user_lastName: { type: String, required: true, trim: true },
    user_pass: { type: String, required: true, trim: true },
    user_level: { type: Number, default: 0},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    google_id: { type: String, default: null }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;