const {
  Container,
  Heading,
  Box,
  SimpleGrid,
  LinkBox,
  LinkOverlay,
  Text,
} = require("@chakra-ui/react");

import { Link } from "@chakra-ui/next-js";

import Image from "next/image";

const CardsWork = ({ title = "allymotion", imgg, linkk }) => {
  return (
    <Box
      transition="all 0.3s ease"
      _hover={{
        transform: "scale(1.05)",
        // filter: "blur(1px)",
      }}
      w="100%"
      textAlign="center"
    >
      <LinkBox cursor="pointer">
        <Image
          width={500}
          height={500}
          boxShadow="lg"
          src={imgg}
          alt="{title}"
          className="grid-item-thumbnail"
          loading="lazy"
        />
        <LinkOverlay as={Link} href={linkk}>
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>
          Part of the lomba Olimpiade Penelitian Siswa Indonesia Health
          Management App With Convolutional Neural Network And Gamified Exercise
          With Pose Detection
        </Text>
      </LinkBox>
    </Box>
  );
};

export default CardsWork;
