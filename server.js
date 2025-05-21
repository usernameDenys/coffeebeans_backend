import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

//app config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json()); //request in json
app.use(cors()); //allows all domains to access API

// API Endpoints

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => console.log("server started on PORT : " + port));
