import { Box, Text, Icon } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="#262626" color="#fff" py={4} textAlign="center">
      <Text>
        Copyright © 2024. Made with <Icon as={FaHeart} color="#ff004f" /> by
        Innocent Emeka
      </Text>
    </Box>
  );
};

export default Footer;
