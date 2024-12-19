import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

const Footer = () => {
  return (
    <Box
      as="footer"
      position="absolute"
      bottom={0}
      width="100%"
      height={{ base: "auto", md: "auto" }}
      p={3}
      color={useColorModeValue("gray.700", "gray.200")}
      fontSize={{ base: "xs", md: "sm" }}
      bg={useColorModeValue("gray.100", "gray.700")}
      textAlign="center"
    >
      <Text color={useColorModeValue("gray.800", "white")}>
        Made with <span style={{ color: "red" }}>❤</span> Mustapha Bouddahr
      </Text>
    </Box>
  );
};

export default Footer;
