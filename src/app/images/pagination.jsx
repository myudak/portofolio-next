"use client";

import PaginationButton from "@/components/pagination/paginationButton";
import { Link } from "@chakra-ui/next-js";
import { Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

const PaginationImage = () => {
  const pathName = usePathname();
  const previouss = (delta = -1) => {
    if (pathName === "/images") return "images/2";

    let number = parseInt(pathName.split("/").pop());
    let newNumber = 0;

    if (delta == 1) {
      newNumber = Math.max(1, number + 1);
    } else {
      if (pathName === "/images/2") return "/images";
      newNumber = Math.max(1, number - 1);
    }
    let newStringg = pathName.slice(0, -1 * number) + "/" + newNumber;

    return newStringg;
  };
  return (
    <Flex
      paddingBottom={10}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <PaginationButton
          disabled={new RegExp("^\\/images$").test(pathName) ? true : false}
          href={previouss()}
        >
          previous
        </PaginationButton>
        <PaginationButton
          active={new RegExp("^/images$").test(pathName) ? true : false}
          href="/images"
        >
          1
        </PaginationButton>
        <PaginationButton
          active={new RegExp("^/images/2$").test(pathName) ? true : false}
          href="/images/2"
        >
          2
        </PaginationButton>
        <PaginationButton>3</PaginationButton>
        <PaginationButton href={previouss(1)}>Next</PaginationButton>
      </Flex>
    </Flex>
  );
};

export default PaginationImage;
