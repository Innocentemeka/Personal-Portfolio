import { Box, Heading, Text, Button, Link, Flex } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import innocentCv from "../assets/innocent_CV.png";

const Skills = () => {
  return (
    <Box
      as="section"
      id="skills"
      py="30px"
      px="10%"
      bg="#000000"
      textColor="#fff"
      mb="40px"
    >
      <Box textAlign="start" mb="40px">
        <Heading as="h1" size="2xl">
          My Skills
        </Heading>
      </Box>

      <Flex
        justify="space-between"
        direction={{ base: "row", md: "row" }}
        gap={8}
      >
        <Flex direction="column" gap={6}>
          <Box>
            <Heading as="h2" size="lg">
              HTML
            </Heading>
            <Text color="#fff" fontSize="15px">
              1 Year Experience
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg">
              JavaScript
            </Heading>
            <Text color="#fff" fontSize="15px">
              6 Months Experience
            </Text>
          </Box>
        </Flex>

        <Flex direction="column" gap={6}>
          <Box>
            <Heading as="h2" size="lg">
              CSS
            </Heading>
            <Text color="#fff" fontSize="15px">
              1 Year Experience
            </Text>
          </Box>

          <Box>
            <Heading as="h2" size="lg">
              React
            </Heading>
            <Text color="#fff" fontSize="15px">
              6 Months Experience
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Box textAlign="center" mt={10}>
        <Link href={innocentCv} download="Innocent_Resume">
          <Button
            w="100%"
            bg="#0000ff"
            color="#ffffff"
            rightIcon={<DownloadIcon />}
            size="lg"
            _hover={{
              bg: "#fff",
              color: "#0000ff",
              boxShadow: "0 0 5px #0000ff",
            }}
            transition="background 1s"
          >
            Download CV
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Skills;
