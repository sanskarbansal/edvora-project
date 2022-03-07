import * as React from "react";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";

export const App = () => (
    <ChakraProvider theme={theme}>
        <Box fontSize="xl">
            <Navbar />
            <HomeScreen />
        </Box>
    </ChakraProvider>
);
