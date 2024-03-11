"use client";
import { Box } from "@chakra-ui/react";
import PaginationImage from "./pagination";

export default function ImagesLayout({ children }) {
  return (
    <Box>
      {children}
      <PaginationImage />
    </Box>
  );
}
