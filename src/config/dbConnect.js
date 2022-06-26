import mongoose from "mongoose";

mongoose.connect("mongodb+srv://api:123@api-node.tola8zq.mongodb.net/api-node");

let db = mongoose.connection;

export default db;