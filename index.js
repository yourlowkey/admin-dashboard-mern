import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import salesRoutes from "./routes/sales.js";
import managementRoutes from "./routes/management.js";
//DATA IMPORTS
import User from "./models/User.js";  
import {dataUser , dataProduct , dataProductStat} from "./data/index.js"
import Product from "./models/Product.js"
import ProductStat from "./models/ProductStat.js"
//CONGFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//ROUTES
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/sales", salesRoutes);
app.use("/management", managementRoutes);

//MONGOOSE SETUP
const port = process.env.PORT || 9000;
const url = process.env.MONGO_URL;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`SERVER PORT :${port}`);
    });
    // Product.insertMany(dataProduct)
    // ProductStat.insertMany(dataProductStat)
  })
  .catch((err) => {
    console.log("Crash--->", err);
  });
