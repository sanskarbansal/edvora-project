import * as React from "react";
import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import HomeScreen from "./screens/HomeScreen";
import Navbar from "./components/Navbar";

export const App = () => (
    <ChakraProvider
        theme={extendTheme({
            config: {
                initialColorMode: "dark",
            },
        })}
    >
        <Box fontSize="xl">
            <Navbar />
            <HomeScreen />
        </Box>
    </ChakraProvider>
);
