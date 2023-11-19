import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Navbar />
      <Box flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  )
}
