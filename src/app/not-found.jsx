"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = () => {
    window.history.back();
  };
  return (
    <Box>
      <Text>Page ny ndak ketemu {":("}</Text>
      <Button onClick={router} variant="ghost" colorScheme="teal">
        Balekk
      </Button>
    </Box>
  );
};

export default NotFound;
