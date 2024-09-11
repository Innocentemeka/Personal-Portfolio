import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Stack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [showMenuOpen, setShowMenuOpen] = useState(false);

  return (
    <Box
      as="nav"
      bg="#080808"
      py="10px"
      px="10%"
      shadow="md"
      textColor="#fff"
      position="sticky"
      zIndex="3"
      top="0"
    >
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
      >
        <Link to="home" smooth={true} duration={500}>
          <Image src={logo} alt="navbar-icon" h={8} />
        </Link>

        <IconButton
          size="md"
          icon={showMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={() => setShowMenuOpen(!showMenuOpen)}
        />

        <Flex display={{ base: "none", md: "flex" }}>
          <DesktopMenu setShowMenuOpen={setShowMenuOpen} />
        </Flex>
      </Flex>

      {showMenuOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <MobileMenu setShowMenuOpen={setShowMenuOpen} />
        </Box>
      )}
    </Box>
  );
};

const DesktopMenu = ({ setShowMenuOpen }) => (
  <Stack direction="row" spacing={8}>
    {menuItems.map((item) => (
      <ChakraLink
        as={Link}
        key={item.label}
        to={item.to}
        smooth={true}
        duration={500}
        offset={item.offset}
        spy={true}
        onClick={() => setShowMenuOpen(false)}
        p="5px"
        transition="color 0.5s"
        borderRadius="15px"
        _hover={{
          textDecoration: "none",
          color: "#0000ff",
          pb: "0",
          borderBottom: "3px solid #0000ff",
        }}
        activeClass="active"
        cursor="pointer"
      >
        {item.label}
      </ChakraLink>
    ))}
  </Stack>
);

const MobileMenu = ({ setShowMenuOpen }) => (
  <Stack as="ul" spacing={4}>
    {menuItems.map((item) => (
      <ChakraLink
        as={Link}
        key={item.label}
        to={item.to}
        smooth={true}
        duration={500}
        offset={item.offset}
        spy={true}
        onClick={() => setShowMenuOpen(false)}
        _hover={{ textDecoration: "none", color: "teal.500" }}
        activeClass="active"
        cursor="pointer"
      >
        {item.label}
      </ChakraLink>
    ))}
  </Stack>
);

const menuItems = [
  { label: "Home", to: "home", offset: -100 },
  { label: "Skills", to: "skills", offset: -80 },
  { label: "Portfolio", to: "works", offset: -80 },
  { label: "Services", to: "service", offset: -80 },
  { label: "Contact Me", to: "contact", offset: -80 },
];

export default NavBar;
