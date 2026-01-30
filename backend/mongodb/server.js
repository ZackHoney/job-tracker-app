require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.DB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected successfully to MongoDB');
        return client.db();
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        process.exit(1);
    }
}

module.exports ={ connectToDatabase, client}