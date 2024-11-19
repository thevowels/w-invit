import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Metadata } from 'next';
import {Box} from "@chakra-ui/react";

export const metadata: Metadata = {
    title: 'Wedding'
};

const Index = () => (
  <Container>
      <Box
          w="100%"
          bg="teal.500"
          color="white"
          p={3}
          textAlign="center"
      >
          <Text>Welcome to our wedding website!</Text>
      </Box>

      <Navbar/>
      <Main>
          <Hero/>
          <section id="the couple">
              <Box
                  bg="red"
                  w="100%"
                  h={"100vh"}>
                  <Text>The couple</Text>
              </Box>
          </section>
          <section id="events">
              <Box
                  bg="blue"
                  w="100%"
                  h={"100vh"}>
                  <Text>Events</Text>
              </Box>

          </section>
          <section id="love story">
              <Box
                  w="100%"
                  h={"100vh"}>
                  <Text>Love story</Text>
              </Box>

          </section>


      </Main>

      {/*<DarkModeSwitch />*/}
    {/*  <Footer>*/}
    {/*      <Text>Powered with Chakra UI</Text>*/}
    {/*</Footer>*/}
    {/*<CTA />*/}
  </Container>
);

export default Index;
