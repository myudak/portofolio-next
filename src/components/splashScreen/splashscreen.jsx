import { motion } from "framer-motion";
import { Box, Text, Heading } from "@chakra-ui/react";

const Splashscreen = ({ finishLoading }) => {
  const handleAnimationComplete = () => finishLoading();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        onAnimationComplete={handleAnimationComplete}
      >
        <Heading cursor="pointer">@myudak</Heading>
      </motion.div>
    </Box>
  );
};

export default Splashscreen;
