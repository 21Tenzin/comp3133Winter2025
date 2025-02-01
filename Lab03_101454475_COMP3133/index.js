const express = require ('express');
const mongoose = require ('mongoose');
const restaurantRoutes = require ('./routes/restaurantRoutes');

const SERVER_PORT = process.env.PORT || 8082;
const app = express();
app.use(express.json());

const DB_NAME = 'lab3_restaurant_database';
const DB_USER_NAME = 'tenzint';
const DB_PASSWORD = 'comp3133';
const CLUSTER_DOMAIN = 'comp3133.kztiu.mongodb.net';

const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@${CLUSTER_DOMAIN}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);

mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected');
}).catch((error) => {
    console.log('Error MongoDb connection', error);
});

app.use('/restaurants', restaurantRoutes);

app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});