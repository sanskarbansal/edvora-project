import { Box, Image, Text, useMediaQuery } from "@chakra-ui/react";

import React from "react";

const getFormattedDate = (date: number) => {
    let dateInChunks = new Date(date).toString().split(" ");
    return `${dateInChunks[2]} ${dateInChunks[1]} ${dateInChunks[3]}`;
};

const StyledSpan = ({ text }: { text: string }) => {
    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
    return (
        <span
            style={{
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: isLargerThan1000 ? "18px" : "12px",
                color: "rgb(207, 207, 207)",
            }}
        >
            {text}
        </span>
    );
};

export default function Ride({ id, city, date, destination_station_code, map_url, origin_station_code, state, station_path, distance }: any) {
    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)");
    return (
        <Box width={isLargerThan1000 ? "80%" : "100%"} height="200px" borderRadius={8} bg="#171717" display="flex" columnGap={4} p={4} position="relative">
            <Box position="absolute" top={4} right={10} display="inline-flex" columnGap={4}>
                <Text px={2} py={1} bg="black" borderRadius="10px" fontSize={isLargerThan1000 ? "18px" : "12px"}>
                    {city}
                </Text>
                <Text px={2} py={1} bg="black" borderRadius="10px" fontSize={isLargerThan1000 ? "18px" : "12px"}>
                    {state}
                </Text>
            </Box>
            <Image src={map_url} alt="Map Url" />
            <Box height="100%" display="flex" flexDirection="column" justifyContent="space-evenly">
                <Text fontSize={isLargerThan1000 ? "18px" : "12px"}>
                    <StyledSpan text="Ride Id:" /> {id}
                </Text>
                <Text fontSize={isLargerThan1000 ? "18px" : "12px"}>
                    <StyledSpan text="Origin Station:" />
                    {origin_station_code}
                </Text>
                <Text fontSize={isLargerThan1000 ? "18px" : "12px"}>
                    <StyledSpan text="station_path:" /> {JSON.stringify(station_path)}
                </Text>
                <Text fontSize={isLargerThan1000 ? "18px" : "12px"}>
                    <StyledSpan text="Date:" /> {getFormattedDate(date)}
                </Text>
                <Text fontSize={isLargerThan1000 ? "18px" : "12px"}>
                    <StyledSpan text="Distance:" /> {distance}
                </Text>
            </Box>
        </Box>
    );
}
