import express, { response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import trucksRoute from './routes/truckRoutes.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

//Middleware for parsing request body
app.use(express.json());

// Handling CORS policy
app.use(cors());

app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Truck details");
});

app.use("/trucks", trucksRoute);

mongoose
  .connect(process.env.mongoDB_URL)
  .then(() => {
    console.log("App is connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });