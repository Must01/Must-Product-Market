import React, { useEffect } from "react";
import {
  Card,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../MERN_components/ProductCard";

import Footer from "../MERN_components/Footer.jsx";

const HomePage = () => {
  const textColor = useColorModeValue("#333", "#fff"); // text color
  const bgColor = useColorModeValue("#fff", "#333");
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <>
      <Container maxWidth={"container.xl"} py={4} pb={14}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={6}>
          Current Products in market 🚀
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 2, md: 4, lg: 8 }}
          width={"full"}
        >
          {products &&
            products.map((product) => (
              <ProductCard
                bgColor={bgColor}
                textColor={textColor}
                key={product._id}
                product={product} // Check if 'product' is an object containing necessary fields like _id
              />
            ))}
        </SimpleGrid>
        {products.length === 0 && ( // check if the products array is empty
          <Text
            fontSize={"xl"}
            textAlign={"center"}
            fontWeight={"bold"}
            color={textColor}
          >
            No Product Found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color={useColorModeValue("#FF0080", "#FA6DB5")}
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </Container>
      <Footer />;
    </>
  );
};

export default HomePage;
