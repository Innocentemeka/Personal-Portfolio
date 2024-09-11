import { Box, Heading, Flex, Icon, Text } from "@chakra-ui/react";
import { FaCode, FaReact } from "react-icons/fa";

const Services = () => {
  return (
    <Box
      as="section"
      id="service"
      py="40px"
      px="10%"
      bg="#000000"
      textColor="#fff"
      mb="30px"
    >
      <Box textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" textAlign="start">
          My Services
        </Heading>
      </Box>

      <Flex wrap="wrap" justify="center" gap={8}>
        <Box
          bg="#262626"
          fontSize="13px"
          p="40px"
          borderRadius="10px"
          fontWeight={300}
          textAlign="start"
          width={{ base: "100%", md: "45%" }}
          _hover={{ transform: "translateY(-10px)" }}
          transition="background 0.5s, transform 0.5s"
        >
          <Icon as={FaCode} fontSize="50px" color="#0000ff" mb={4} />
          <Heading as="h2" size="lg" fontWeight={500} mb="15px">
            Frontend Developer
          </Heading>
          <Text color="#ffffff">
            Develop new user-facing features, determine the structure and design
            of web pages, build reusable codes, and optimize page loading times.
          </Text>
        </Box>

        <Box
          bg="#262626"
          fontSize="13px"
          p="40px"
          borderRadius="md"
          textAlign="start"
          width={{ base: "100%", md: "45%" }}
          _hover={{ transform: "translateY(-10px)" }}
          transition="background 0.5s, transform 0.5s"
        >
          <Icon as={FaReact} fontSize="50px" color="#0000ff" mb={4} />
          <Heading as="h2" size="lg" fontWeight={500} mb="15px">
            React Developer
          </Heading>
          <Text color="#ffffff">
            Design and implement user interfaces (UIs) and UI components using
            React. Develop and maintain UIs for web and mobile apps.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Services;
