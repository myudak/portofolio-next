"use client";

import { client, urlFor } from "@/lib/sanity";
import { use } from "react";
const { Heading, SimpleGrid } = require("@chakra-ui/react");
import Section from "@/components/section/section";
import CardsWork from "@/components/card/CardsWork";

import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { IconClipboardCopy } from "@tabler/icons-react";
import { Link } from "@chakra-ui/next-js";
import { Box, Image, Container, Text } from "@chakra-ui/react";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug" : slug.current,
      titleImg
  }`;

  const data = await client.fetch(query);

  return data;
}

const Posts = () => {
  const data = use(getData());

  return (
    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        Works
      </Heading>
      <BentoGrid className="max-w-4xl mx-auto">
        {data.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={
              <Text noOfLines={i === 3 || i === 6 ? "1" : "2"}>
                {item.smallDescription}
              </Text>
            }
            header={
              <Box
                as={Link}
                href="/"
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"
              >
                <Image
                  src={urlFor(item.titleImg).url()}
                  alt={item.titleImg}
                  className="object-cover flex-1 w-full h-full min-h-[6rem] rounded-xl"
                />
              </Box>
            }
            icon={<IconClipboardCopy className="h-4 w-4 text-neutral-500" />}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      {/* <SimpleGrid columns={[1, 2, 2]} gap={6}>
        {data.map((post, idx) => (
          <CardsWork
            title={post.title}
            linkk="/works/allyMotion"
            imgg={urlFor(post.titleImg).url()}
          />
        ))}
      </SimpleGrid> */}
    </Section>
  );
};

export default Posts;
