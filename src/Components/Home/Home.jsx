import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import myPhoto from "../assets/HomePhoto.png";

const HeroSection = () => {
  const SmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="section"
      id="home"
      py="100px"
      px="10%"
      backgroundPosition="center"
      w="100%"
      bg="#000000"
      textColor="#fff"
      mb="30px"
    >
      {!SmallScreen ? (
        <Flex align="center" justify="space-between" className="home-container">
          <Box className="home-text">
            <Text fontSize="2xl" fontWeight={400}>
              Frontend Developer
            </Text>
            <Heading as="h1" size="2xl">
              Hi, I'm{" "}
              <Text as="span" color="#0000ff">
                Innocent
              </Text>{" "}
              <br />
              Emeka From Nigeria
            </Heading>
          </Box>
          <Box className="img-section" boxSize="300px">
            <Image
              src={myPhoto}
              alt="Innocent Emeka"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
        </Flex>
      ) : (
        <Box className="small-screen">
          <Box className="img-section" boxSize="250px" mx="auto" mb="50px">
            <Image
              src={myPhoto}
              alt="Innocent Emeka"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
          <Box className="home-text" textAlign="center">
            <Text fontSize="2xl" fontWeight={400}>
              Frontend Developer
            </Text>
            <Heading as="h1" size="xl" mt="10px">
              Hi, I'm{" "}
              <Text as="span" color="#0000ff">
                Innocent
              </Text>{" "}
              <br />
              Emeka From Nigeria
            </Heading>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HeroSection;
