import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import NavBar from "./MERN_components/NavBar.jsx";
import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "./components/ui/color-mode.jsx";
function App() {
  return (
    <Box bg={useColorModeValue("red.50", "gray.900")} minH="100vh">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
