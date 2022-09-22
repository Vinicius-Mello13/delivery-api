import express from "express";

import * as dotenv from "dotenv";
dotenv.config();

import { dbConnect } from "./config/db.config.js";
import { restaurantRouter } from "./routes/restaurant.routes.js";
dbConnect();

const app = express();

app.use(express.json());

app.use("/restaurant", restaurantRouter)

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up at port ${process.env.PORT}`);
});
