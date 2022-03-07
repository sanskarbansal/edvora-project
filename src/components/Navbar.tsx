import { Avatar, Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
    return (
        <Box w="100%" bg="black" display="flex" justifyContent="space-between" pl={6} py={3} pr={6}>
            <Heading>Edvora</Heading>
            <Box display="flex" justifyContent="space-evenly" alignItems="center">
                <Text pr={3}>Sanskar</Text>
                <Avatar name="Sanskar" src="https://bit.ly/dan-abramov" />
            </Box>
        </Box>
    );
}
