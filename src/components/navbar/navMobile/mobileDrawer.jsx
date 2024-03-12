import React from "react";
import {
  Flex,
  Button,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "@chakra-ui/next-js";

import data from "../navLink/LinkNavbar.data";
data.unshift({
  title: "Homepage",
  path: "/",
  regex: "^\\/$",
});

export default function MobileDrawer() {
  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Menu>
        <MenuButton as={Button}>
          <IoMdMenu size="26px" />
        </MenuButton>
        <MenuList>
          <VStack alignItems="left">
            {data.map((item, i) => (
              <Link href={item.path} key={i}>
                <MenuItem>{item.title}</MenuItem>
              </Link>
            ))}
          </VStack>
        </MenuList>
      </Menu>
    </Flex>
  );
}
