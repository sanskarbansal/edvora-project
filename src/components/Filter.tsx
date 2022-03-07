import { Menu, MenuButton, MenuList, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Filter({ rides, onChangeCity, onChangeState }: any) {
    const [states, setStates]: any = useState({});
    const [selectedState, setSelectedState]: any = useState("");
    const [selectedCity, setSelectedCity]: any = useState("");
    useEffect(() => {
        if (!rides) return;
        const _states: any = {};
        rides.forEach(({ state, city }: { state: string; city: string }) => {
            _states[state] = _states[state] || new Set();
            _states[state].add(city);
        });
        Object.keys(_states).map((state) => (_states[state] = [..._states[state]]));
        setStates(_states);
    }, [rides]);
    useEffect(() => {
        setSelectedCity("");
        onChangeState(selectedState);
    }, [selectedState, onChangeState]);
    useEffect(() => {
        onChangeCity(selectedCity);
    }, [selectedCity, onChangeCity]);
    return (
        <Menu closeOnSelect={false}>
            <MenuButton
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
            >
                Filter
            </MenuButton>
            <MenuList bg="#131313">
                <Select py={2} px={2} placeholder="State" onChange={(event: React.ChangeEvent<any>) => setSelectedState(event.target.value)}>
                    {Object.keys(states).map((state, idx) => (
                        <option key={`${idx}-${state}`} value={state}>
                            {state}
                        </option>
                    ))}
                </Select>
                <Select py={2} px={2} placeholder="City" onChange={(event: React.ChangeEvent<any>) => setSelectedCity(event.target.value)}>
                    {selectedState &&
                        states[selectedState].map((city: string, idx: number) => (
                            <option key={`${idx}-${city}`} value={city} onClick={() => setSelectedState(city)}>
                                {city}
                            </option>
                        ))}
                </Select>
            </MenuList>
        </Menu>
    );
}
