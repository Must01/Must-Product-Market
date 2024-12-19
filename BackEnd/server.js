import express from "express";
import dotenv from "dotenv"; // Import dotenv
import path from "path";
import { connectDB } from "./config/db.js";
import ProductRoutes from "./routes/product.route.js";

// configure dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // get the port from the env

const __dirname = path.resolve();

app.use(express.json()); // allow us to accept json data in the req.body
app.use("/api/products", ProductRoutes);

// serve static files in production mode
if (process.env.NODE_ENV === "production") {
  // set static folder to FrontEnd/dist folder
  app.use(express.static(path.join(__dirname, "/FrontEnd/dist")));
  // any route that doesn't start with /api will be redirected to index.html
  app.get("*", (req, res) => {
    // send index.html file
    res.sendFile(path.resolve(__dirname, "FrontEnd", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port http://localhost:${PORT}`);
});
