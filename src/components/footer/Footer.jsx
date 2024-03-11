import { Box } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Muchamad Yuda, Made with{" "}
      <FaHeart className="inline-block align-middle" /> {"\\(￣︶￣*\\))"}
    </Box>
  );
};

export default Footer;
