import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const addProduct = async (req, res) => {
  const product = req.body; // user will send this data

  //   check if the user write all the data
  if (!product.name || !product.price || !product.image) {
    return res
      .status(404)
      .json({ success: false, message: "Please Provide all fields" });
  }

  const newProduct = await Product.create(product);

  try {
    newProduct.save(); // save to the database
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error in creating Producte:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params; // get the id we pased in the url
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ success: false, message: "Product Not Found" });
    }

    await Product.findByIdAndDelete(id);
    res.json({ success: true, message: "Product Deleted successfuly" });
  } catch (error) {
    console.log("error in deleting the product", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // empty {} means fetch all the products
    if (!products) {
      return res
        .status(404)
        .json({ success: false, message: "No Products Found !" });
    }
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error in fetching the products", error.message);
    res.status(500).json({
      success: false,
      message: "failed to fetch data, Server Error",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const updateDetails = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    // check if the id is valid
    return res
      .status(404)
      .json({ success: false, message: "Can not found product with this ID" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updateDetails, {
      new: true, // return the updated document cause by default the method returns the old document
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("error in updating the product", error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};
