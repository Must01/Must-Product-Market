import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useColorMode } from "../components/ui/color-mode";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode(); // colorMode is light or dark
  return (
    <>
      <Container maxW={"1140px"} px={4}>
        <Flex
          h={16}
          alignItems={{ base: "center", sm: "center" }}
          justifyContent={"space-between"}
          flexDir={{ base: "column", sm: "row" }}
        >
          <Text
            color={"#FF0080"}
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            my={2}
          >
            <Link to={"/"}>MUST PRODUCTS MARKET</Link>
          </Text>
          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
              <Button>
                <IoMdAddCircleOutline
                  color="#FA6DB5"
                  fontWeight="bold"
                  fontSize={"24px"}
                />
              </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? (
                <MdDarkMode color="#FA6DB5" fontSize={"24px"} /> // dark
              ) : (
                <MdLightMode color="#FF0080" fontSize={"24px"} /> // light
              )}
            </Button>
          </HStack>
        </Flex>
      </Container>
    </>
  );
}
