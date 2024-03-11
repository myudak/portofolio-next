"use client";
import { HStack, Box, useColorModeValue } from "@chakra-ui/react";

import { Link } from "@chakra-ui/next-js";
import links from "./LinkNavbar.data";
import { usePathname } from "next/navigation";

const lightColor = "#98CDFF";
const darkColor = "#cbe6ff";

const LinkNav = () => {
  const pathName = usePathname();
  const bg = useColorModeValue(darkColor, lightColor);

  return (
    <HStack display={{ base: "none", md: "flex" }} as="nav" spacing="5">
      {links.map((link, i) => (
        <Box
          key={i}
          color={new RegExp(link.regex).test(pathName) && "white"}
          bg={new RegExp(link.regex).test(pathName) && "teal"}
        >
          <Link m={2} kpx="2" py="5" key={i} href={link.path}>
            {link.title}
          </Link>
        </Box>
      ))}
    </HStack>
  );
};

export default LinkNav;
