const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
    },
    email: {
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
    },
    city: {
        type: String,
        required: true,
        match: [/^[A-Za-z\s]+$/, "City name must contain only alphabets and spaces"]
    },
    website: {
        type: String,
        required: true,
        match: [/^https?:\/\/[^\s/$.?#].[^\s]*$/, "Invalid website URL"]
    },
    zipCode: {
        type: String,
        required: true,
        match: [/^\d{5}-\d{4}$/, "Zip Code must be in format DDDDD-DDDD"]
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d-\d{3}-\d{3}-\d{4}$/, "Phone must be in format D-DDD-DDD-DDDD"]
    }
});

module.exports = mongoose.model("User", userSchema);
