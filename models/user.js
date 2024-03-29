var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: String,
        email: String,
        birthday: String,
        address: String
    }
);

const User = mongoose.model("user", userSchema);

module.exports = User;