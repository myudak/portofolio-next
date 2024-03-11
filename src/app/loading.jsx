"use client";

import { Skeleton, Box } from "@chakra-ui/react";

import Section from "@/components/section/section";

import { Heading, Text, Button } from "@chakra-ui/react";
import contoh from "@/../public/youtube.png";
import Image from "next/image";

const Loading = () => {
  return (
    <Box>
      <Skeleton>
        <Image
          src={contoh}
          alt="{title}"
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
      </Skeleton>
      <Skeleton>
        <Heading as="h3" variant="section-title">
          About Project
        </Heading>
      </Skeleton>
      <Skeleton>
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
      </Skeleton>
      <Skeleton>
        <Box align="center" my={4}>
          <Button>Open Project</Button>
        </Box>
      </Skeleton>
    </Box>
  );
};

export default Loading;
