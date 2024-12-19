import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useProductStore } from "../store/product";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { useColorModeValue } from "../components/ui/color-mode";

Modal.setAppElement("#root"); // Set the app element for accessibility

const ProductCard = ({ product, textColor, bgColor }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isOpen, setIsOpen] = useState(false);
  const { deleteProduct, updateProductFun } = useProductStore();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handledeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast.error(message || "Something went wrong.");
    } else {
      toast.success(message || "Product Deleted successfully!");
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProductFun(pid, updatedProduct);

    if (!success) {
      toast.error(message || "Something went wrong.");
    } else {
      toast.success(message || "Product Updated successfully!");
      closeModal(); // Close the modal after the update is successful
    }
  };

  return (
    <>
      <Toaster
        isClosable={true}
        duration={3000}
        position="bottom-right"
        reverseOrder={false}
      />
      <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        transition="all 0.3s"
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bgColor}
      >
        <Image
          src={product.image}
          alt={product.name}
          h={48}
          w={"full"}
          objectFit={"cover"}
        />
        <Box p={4}>
          <Heading as={"h3"} size={"md"} mb={2}>
            {product.name}
          </Heading>
          <Text fontWeight={"bold"} color={textColor} fontSize={"xl"} mb={4}>
            {product.price} {" $"}
          </Text>

          <HStack spacing={4} justify="flex-end">
            <IconButton
              onClick={openModal} // Open the Modal
              size="sm"
              aria-label="Edit Product"
              variant={"solid"}
              colorPalette="blue"
            >
              <FaEdit />
            </IconButton>
            <IconButton
              onClick={() => handledeleteProduct(product._id)} // Delete Product
              size="sm"
              aria-label="Delete Product"
              variant={"solid"}
              colorPalette="red"
            >
              <RiDeleteBin5Fill />
            </IconButton>
          </HStack>
        </Box>
      </Box>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: useColorModeValue(
              "rgba(0, 0, 0, 0.5)",
              "rgba(0, 0, 0, 0.5)"
            ), // Dynamic background color for the overlay
            zIndex: 1000, // Ensure it stays on top
            display: "flex",
            justifyContent: "center", // Center the modal in the overlay
            alignItems: "center",
          },
          content: {
            backgroundColor: bgColor, // Modal background color based on mode
            color: textColor, // Text color for the content
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "600px",
            width: "auto",
            height: "auto", // Let the content decide the height
            maxHeight: "44vh", // Max height for the modal content (optional)
            overflowY: "auto", // Enable scrolling if content exceeds the max height
            margin: "auto", // Center the modal content horizontally
          },
        }}
      >
        <Heading as="h3" size="md" mb={4}>
          Update Product
        </Heading>
        <VStack spacing={4}>
          <Input
            placeholder="Product Name"
            name="name"
            value={updatedProduct.name}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, name: e.target.value })
            }
          />
          <Input
            placeholder="Product Price"
            name="price"
            value={updatedProduct.price}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, price: e.target.value })
            }
          />
          <Input
            placeholder="Product Image"
            name="image"
            value={updatedProduct.image}
            onChange={(e) =>
              setUpdatedProduct({ ...updatedProduct, image: e.target.value })
            }
          />
        </VStack>
        <HStack mt={4} justify="space-between">
          <Button onClick={closeModal} colorPalette="red">
            Close
          </Button>
          <Button
            colorPalette="blue"
            onClick={() => handleUpdateProduct(product._id, updatedProduct)}
          >
            Update
          </Button>
        </HStack>
      </Modal>
    </>
  );
};

export default ProductCard;
