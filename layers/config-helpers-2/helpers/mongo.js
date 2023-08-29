// Import the MongoDB driver
const envVariable = process.env.dev;
const config = require('/opt/config/' + envVariable);
const MongoClient = require('/opt/node_modules/mongodb').MongoClient;
// Define our connection string. Info on where to get this will be described below. In a real world application you'd want to get this string from a key vault like AWS Key Management, but for brevity, we'll hardcode it in our serverless function here.
const MONGODB_URI = 'mongodb://' + config.db.host;
// Once we connect to the database once, we'll store that connection and reuse it so that we don't have to connect to the database on every request.

const MONGODB_BOMBORAURI = 'mongodb://' + config.bomboradb.host;
let cachedDb = {};
let cachedBOmboraDb = {};

exports.connectToDatabase = async function (dbName) {
  if (cachedDb[dbName]) {
    return cachedDb[dbName];
  }

  // Connect to our MongoDB database hosted on MongoDB Atlas
  const client = await MongoClient.connect(MONGODB_URI);
  // Specify which database we want to use
  const db = await client.db(dbName);
  cachedDb[dbName] = db;
  return db;
}

exports.connectToBomboraDatabase = async function (bomboraDbName) {
  if (cachedBOmboraDb[bomboraDbName]) {
    return cachedBOmboraDb[bomboraDbName];
  }

  // Connect to our MongoDB database hosted on MongoDB 
  const client = await MongoClient.connect(MONGODB_BOMBORAURI);
  // Specify which database we want to use
  const bomboraDb = await client.db(bomboraDbName);
  cachedBOmboraDb[bomboraDbName] = bomboraDb;
  return bomboraDb;
}