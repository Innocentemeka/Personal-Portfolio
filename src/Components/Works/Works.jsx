import { Box, Heading, Flex, Image, Text, Link, Icon } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Myportfolio1 from "../assets/web-1.png";
import Myportfolio2 from "../assets/web-2.png";
import Myportfolio3 from "../assets/web-3.png";
import Myportfolio4 from "../assets/web-4.png";
import Myportfolio5 from "../assets/web-5.png";
import Myportfolio6 from "../assets/web-6.png";

const Works = () => {
  const projects = [
    {
      img: Myportfolio1,
      title: "LAGOS STATE VEHICLE INSPECTION SERVICE WEBSITE",
      techStack: ["HTML", "CSS"],
      link: "https://vio-website-ashy.vercel.app/#",
    },
    {
      img: Myportfolio2,
      title: "Crypto Marketplace",
      techStack: ["REACT.JS"],
      link: "https://cryptocurrency-tracker-xi-lyart.vercel.app/",
    },
    {
      img: Myportfolio3,
      title: "WEATHER APP",
      techStack: ["REACT.JS"],
      link: "https://weatherapp-beryl-eta.vercel.app/",
    },
    {
      img: Myportfolio4,
      title: "CALCULATOR APP",
      techStack: ["REACT.JS"],
      link: "https://calculator-six-sable.vercel.app/",
    },
    {
      img: Myportfolio5,
      title: "TODO WEB APP",
      techStack: ["HTML", "CSS", "JAVASCRIPT"],
      link: "https://todo-list-three-tau-85.vercel.app/",
    },
    {
      img: Myportfolio6,
      title: "Star Rating web App",
      techStack: ["REACT.JS"],
      link: "https://star-rating-mu.vercel.app/",
    },
  ];

  return (
    <Box
      as="section"
      id="works"
      py="40px"
      px="10%"
      bg="#000000"
      textColor="#fff"
      mb="30px"
    >
      <Box textAlign="start" mb="40px">
        <Heading as="h1" size="2xl" color="#fff">
          My Work
        </Heading>
      </Box>

      <Flex wrap="wrap" justify="space-between" gap={6}>
        {projects.map((project, index) => (
          <Box
            key={index}
            width={{ base: "100%", md: "30%" }}
            position="relative"
            _hover={{ transform: "scale(1.1)" }}
          >
            <Image
              src={project.img}
              alt={`work-img-${index}`}
              borderRadius="10px"
              w="100%"
              h="350px"
              transition="transform 5s;"
            />

            <Flex
              position="absolute"
              w="100%"
              top="0"
              left="0"
              right="0"
              bottom="0"
              bg="linear-gradient(rgba(0, 0, 0, 0.6), #0000ff)"
              opacity="0"
              _hover={{ opacity: 1, height: "100%" }}
              transition="opacity 0.5s"
              p={4}
              borderRadius="10px"
              overflow="hidden"
              justifyContent="center"
              alignItems="center"
              direction="column"
              px="40px"
              textAlign="center"
            >
              <Heading as="h3" fontSize="15px" mb="10px">
                {project.title}
              </Heading>

              <Flex wrap="wrap" gap={2} mb="10px">
                {project.techStack.map((tech, i) => (
                  <Text fontSize="13px" key={i}>
                    {tech}
                  </Text>
                ))}
              </Flex>

              <Link
                href={project.link}
                isExternal
                w="60px"
                h="60px"
                bg="#fff"
                borderRadius="50%"
                lineHeight="60px"
                textAlign="center"
                fontSize="25px"
                _hover={{ transform: "translateY(-5px)" }}
                transition="transform 0.5s"
              >
                <Icon as={ExternalLinkIcon} color="#0000ff" />
              </Link>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Works;
