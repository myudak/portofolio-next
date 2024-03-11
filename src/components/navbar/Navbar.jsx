"use client";

import {
  Box,
  Heading,
  Flex,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

import Link from "next/link";

import ThemeSwitcherButton from "../themeSwitcher/ThemeSwitcher";
import LinkNav from "./navLink/LinkNavbar";
import MobileDrawer from "./navMobile/mobileDrawer";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <Box
      pos={"sticky"}
      w="100%"
      px="6"
      py="3"
      backdropFilter="blur(10px)"
      top={0}
      bg={useColorModeValue("#f0e7db80", "#20202380")}
      zIndex={99}
    >
      <Flex
        align="center"
        justify={{ base: "space-between", md: "space-around" }}
      >
        <Heading
          // color={new RegExp("^\\/$").test(pathName) && "white"}
          // bg={new RegExp("^\\/$").test(pathName) && "teal"}
          cursor="pointer"
          as="h4"
          size="md"
        >
          <Link href="/">Muchamad Yuda</Link>
        </Heading>
        <LinkNav />
        <HStack>
          <ThemeSwitcherButton />
          <MobileDrawer />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
