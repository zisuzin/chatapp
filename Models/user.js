const mongoose = require("mongoose");

// 스키마 작성
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User muse type name"],
        unique: true,
    },
    token: {
        type: String,
    },
    online: {
        type: Boolean,
        default: false,
    },
});
module.exports = mongoose.model("User", userSchema);