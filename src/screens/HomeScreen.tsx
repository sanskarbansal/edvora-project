import React, { useEffect, useState } from "react";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import axios from "axios";
import { getRides, getUser } from "../config/apiUrls";
import Ride from "../components/Ride";
import { getDistance } from "../utils/utils";

export default function HomeScreen() {
    const [rides, setRides] = useState([]);
    const [user, setUser]: any = useState({});
    useEffect(() => {
        axios.get(getUser).then(({ data }) => setUser(data));
    }, []);
    useEffect(() => {
        if (user) {
            axios.get(getRides).then(({ data }) => {
                let _rides = data.map((ride: { station_path: number[] }) => ({ ...ride, distance: getDistance(ride.station_path, user?.station_code) }));
                setRides([].sort.call(_rides, (a: any, b: any) => (a.distance < b.distance ? -1 : 1)));
                // setRides(data);
            });
        }
    }, [user]);
    return (
        <Box width="100%">
            <Tabs paddingTop={4}>
                <TabList borderBottomWidth={0} px={16}>
                    <Tab>Nearest rides</Tab>
                    <Tab>Upcoming rides</Tab>
                    <Tab>Past rides</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Box display="flex" flexDirection="column" alignItems="center" rowGap={4}>
                            {rides.map((ride: any, idx) => (
                                <Ride key={`${idx}-${ride?.id}`} {...ride} distance={getDistance(ride.station_path, user?.station_code)} />
                            ))}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="flex" flexDirection="column" alignItems="center" rowGap={4}>
                            {rides
                                .filter((ride: any) => new Date(ride.date).getTime() > Date.now())
                                .map((ride: any, idx) => (
                                    <Ride key={`${idx}-${ride?.id}`} {...ride} distance={getDistance(ride.station_path, user?.station_code)} />
                                ))}
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box display="flex" flexDirection="column" alignItems="center" rowGap={4}>
                            {rides
                                .filter((ride: any) => new Date(ride.date).getTime() < Date.now())
                                .map((ride: any, idx) => (
                                    <Ride key={`${idx}-${ride?.id}`} {...ride} distance={getDistance(ride.station_path, user?.station_code)} />
                                ))}
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
}
