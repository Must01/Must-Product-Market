import express from "express";

import {
  addProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controller/product.controller.js";

const router = express.Router(); // create a router

router.post("/", addProduct);
router.delete("/:id", deleteProduct);
router.get("/", getAllProducts);
router.put("/:id", updateProduct);

export default router; // export the router
