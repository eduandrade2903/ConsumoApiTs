import mongoose from "mongoose";

mongoose.connect("mongodb+srv://gabe:123@api.xgyodgl.mongodb.net/api-node");

let db = mongoose.connection;

export default db;