"use client";

import Section from "@/components/section/section";
import linksWorks from "../works.data";

import {
  Heading,
  Text,
  Box,
  Button,
  Card,
  CardBody,
  Divider,
  Stack,
  CardFooter,
  ButtonGroup,
  CardHeader,
} from "@chakra-ui/react";

import contoh from "@/../public/allymotion.png";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import { ArrowBackIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const Allymotion = () => {
  return (
    <Section delay={0.1}>
      <Card>
        <CardHeader>
          <ButtonGroup spacing={"2"}>
            <Button as={Link} href="/works" scroll={false} colorScheme="teal">
              <ArrowBackIcon />
            </Button>
          </ButtonGroup>
        </CardHeader>
        <Divider />
        <CardBody>
          <Image
            boxShadow="lg"
            src={contoh}
            alt="{title}"
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
          />
          <Stack mt="6" spacing="3">
            <Heading as="h3" variant="section-title">
              Tech Used
            </Heading>
            <Text>
              {linksWorks.allymotion.TechUsed.map(
                (link, i) => link + "\u00a0\u00a0\u00a0\u00a0"
              )}
            </Text>

            <Heading as="h3" variant="section-title">
              About Project
            </Heading>
            <Text textAlign={"justify"} textIndent={"1em"}>
              Assalamualaikum! My name is Muchamad Yuda. I am fluent in English,
              both in speaking and writing, and have a strong computer skills.
              Passionate computer science student with a strong interest in data
              science, decision intelligence, and AI. Aspiring to contribute to
              the field by leveraging my technical skills and academic
              knowledge. Currently honing my expertise in statistics, decision
              theory, machine learning, and artificial intelligence.
              Enthusiastic about public-speaking, I enjoy sharing insights and
              knowledge within the computer science community.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing={"2"}>
            <Button
              as={Link}
              target="_blank"
              href="https://allymotion.web.app"
              scroll={false}
              colorScheme="teal"
              leftIcon={<ExternalLinkIcon />}
            >
              Open Project
            </Button>
            <Button
              as={Link}
              variant={"ghost"}
              href="https://allymotion.web.app"
              scroll={false}
              colorScheme="teal"
            >
              Paper
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Section>
  );
};

export default Allymotion;
