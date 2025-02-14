const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 8081;

// MongoDB Connection Details
const DB_NAME = "lab4_users_database";
const DB_USER_NAME = "tenzint"; 
const DB_PASSWORD = "comp3133"; 
const CLUSTER_DOMAIN = "comp3133.kztiu.mongodb.net"; 
const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@${CLUSTER_DOMAIN}/${DB_NAME}?retryWrites=true&w=majority`;

// Function to Connect to MongoDB
const connectDB = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        
        // MongoDB Connection Details
        const DB_NAME = "lab4_users_database";
        const DB_USER_NAME = "tenzint"; 
        const DB_PASSWORD = "comp3133"; 
        const CLUSTER_DOMAIN = "comp3133.kztiu.mongodb.net"; 
        const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@${CLUSTER_DOMAIN}/${DB_NAME}?retryWrites=true&w=majority`;

        await mongoose.connect(DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error while connecting to MongoDB:", err);
    }
};

// Middleware
app.use(express.json());
app.use("/users", userRoutes);

// Start Server and Connect to DB
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await connectDB();
});
