import { Link } from "@chakra-ui/next-js";
import { Button } from "@chakra-ui/react";

const PaginationButton = ({
  href = "/",
  disabled = false,
  active = false,
  children,
}) => {
  const activeStyle = {
    bg: "brand.600",
    _dark: {
      bg: "brand.500",
    },
    color: "white",
  };

  return !disabled && !active ? (
    <Button
      as={Link}
      href={href}
      scroll={false}
      mx={1}
      px={4}
      py={2}
      rounded="md"
      colorScheme="teal"
      {...(active && activeStyle)}
    >
      {children}
    </Button>
  ) : (
    <Button
      scroll={false}
      mx={1}
      px={4}
      py={2}
      rounded="md"
      colorScheme="teal"
      opacity={disabled && 0.6}
      _hover={!disabled && activeStyle}
      cursor={disabled && "not-allowed"}
      {...(active && activeStyle)}
      _dark={"color:dark"}
    >
      {children}
    </Button>
  );
};

export default PaginationButton;
