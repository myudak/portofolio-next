"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  chakra,
  Button,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";

import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import Section from "@/components/section/section";
import pageData from "./page.data";

import cimoProfile from "../../public/cimo.jpg";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => {
  const bg = useColorModeValue("#cbe6ff", "#98CDFF");
  return (
    <Container>
      <Box
        colorScheme="teal"
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="teal"
        color={"white"}
        css={{ backdropFilter: "blur(10px)" }}
        boxShadow="lg"
      >
        Student at Vidatra, Bontang, Tech Enthusiast
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Muchamad Yuda
          </Heading>
          <p>I Craft Digital Solutions In Code And Cloud.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src={cimoProfile}
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      {/* ABOUT */}
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>
        <Text textAlign={"justify"} textIndent={"1em"}>
          Assalamualaikum! My name is Muchamad Yuda. I am fluent in English,
          both in speaking and writing, and have a strong computer skills.
          Passionate computer science student with a strong interest in data
          science, decision intelligence, and AI. Aspiring to contribute to the
          field by leveraging my technical skills and academic knowledge.
          Currently honing my expertise in statistics, decision theory, machine
          learning, and artificial intelligence. Enthusiastic about
          public-speaking, I enjoy sharing insights and knowledge within the
          computer science community.
        </Text>
        {/* <Text textAlign={"justify"} textIndent={"1em"}>
          Takuya is a freelance and a full-stack developer based in Osaka with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{" "}
          <Link as={Link} href="/works/inkdrop" passHref scroll={false}>
            Inkdrop
          </Link>
          . He publishes content for marketing his products and his YouTube
          channel called &quot;
          <Link
            as={Link}
            href="https://www.youtube.com/devaslife"
            passHref
            target="_blank"
          >
            Dev as Life
          </Link>
          &quot; has more than 100k subscribers.
        </Text> */}
        <Box align="center" my={4}>
          <Button
            as={Link}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      {/* BIOOO */}
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        {pageData.pageDataBio.map((data, _) => (
          <Box key={_} pl={"3.4em"} textIndent={"-3.4em"}>
            <Text as={"span"} fontWeight={"bold"} mr={"1em"}>
              {data.year}
            </Text>
            {data.title}
          </Box>
        ))}
      </Section>

      {/* MEDSOSS */}
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <SimpleGrid columns={2}>
          {pageData.pageDataLink.map((data, _) => (
            <Link href={data.link} target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={data.icon}>
                {data.title}
              </Button>
            </Link>
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  );
};

export default Home;
