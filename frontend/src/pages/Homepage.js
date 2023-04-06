import React from "react";
import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";
import {
  Box,
  Container,
  Text,
  TabList,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        className="preet"
        d="flex"
        justifyContent="center"
        textAlign={"center"}
        p={3}
        background="white"
        width="100%"
        borderRadius="lg"
        m="40px 0px 15px 0px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color={"black"}>
          Talk-A-Tive
        </Text>
      </Box>
      <Box
        d="flex"
        justifyContent="center"
        textAlign={"center"}
        p={3}
        background="white"
        width="100%"
        borderRadius="lg"
        m="40px 0px 15px 0px"
        color={"black"}
      >
        <Tabs variant="soft-rounded">
          <TabList>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
