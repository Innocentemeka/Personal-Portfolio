import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaPhoneSquareAlt,
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  Box,
  Button,
  FormControl,
  Input,
  Textarea,
  Heading,
  Text,
  Link,
  Icon,
  Flex,
} from "@chakra-ui/react";
import PopUp from "../PopUp/Popup";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_b7c6l4p", "template_7ivff15", form.current, {
        publicKey: "c1kthd_KNed27c7J0",
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
    setSuccess(true);
  };

  setTimeout(() => {
    setSuccess(false);
  }, 5000);

  return (
    <Box id="contact" p="40px" bg="#000000" color="#fff">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        alignItems="center"
      >
        <Box w={{ base: "100%", md: "45%" }} flexBasis="35%">
          <Heading mb="30px" fontWeight={500}>
            Contact Me
          </Heading>
          <Text mb="30px">
            <Icon as={FaPaperPlane} mr="15px" fontSize="25px" color="#0000ff" />
            innocent7932@gmail.com
          </Text>
          <Text mb="30px">
            <Icon
              as={FaPhoneSquareAlt}
              mr="15px"
              fontSize="25px"
              color="#0000ff"
            />
            +2348108358516
          </Text>
          <Flex gap={4} mb={5}>
            <Link href="https://www.facebook.com/chioma.som.5" isExternal>
              <Icon
                as={FaFacebook}
                boxSize={7}
                _hover={{ color: "#0000ff", transform: "translateY(-5px)" }}
                transition="transform 0.5s"
              />
            </Link>
            <Link href="https://wa.me/qr/M6OKMPSP52JUP1" isExternal>
              <Icon
                as={FaWhatsapp}
                boxSize={7}
                _hover={{ color: "#0000ff", transform: "translateY(-5px)" }}
                transition="transform 0.5s"
              />
            </Link>
            <Link
              href="https://www.instagram.com/invites/contact/?i=1va1pnz4wqdvo&utm_content=a2bbji6"
              isExternal
            >
              <Icon
                as={FaInstagram}
                boxSize={7}
                _hover={{ color: "#0000ff", transform: "translateY(-5px)" }}
                transition="transform 0.5s"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/innocent-emeka-b879402a6/"
              isExternal
            >
              <Icon
                as={FaLinkedin}
                boxSize={7}
                _hover={{ color: "#0000ff", transform: "translateY(-5px)" }}
                transition="transform 0.5s"
              />
            </Link>
          </Flex>
        </Box>
        <Box w={{ base: "100%", md: "45%" }} flexBasis="60%">
          <form ref={form} onSubmit={sendEmail}>
            <FormControl isRequired mb={3}>
              <Input
                type="text"
                name="user_name"
                placeholder="Your Name"
                bg="#262626"
                color="#fff"
                border="0"
                p="25px"
                fontSize="18px"
                mb="15px"
                outline="none"
                borderRadius="6px"
                _placeholder={{ color: "#fff" }}
              />
            </FormControl>
            <FormControl isRequired mb={3}>
              <Input
                type="email"
                name="user_email"
                placeholder="Your Email"
                bg="#262626"
                color="#fff"
                border="0"
                p="25px"
                fontSize="18px"
                mb="15px"
                outline="none"
                borderRadius="6px"
                _placeholder={{ color: "#fff" }}
              />
            </FormControl>
            <FormControl isRequired mb={3}>
              <Textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                bg="#262626"
                color="#fff"
                border="0"
                p="25px"
                fontSize="18px"
                outline="none"
                borderRadius="6px"
                _placeholder={{ color: "#fff" }}
              />
            </FormControl>
            {success && <PopUp />}
            <Button
              type="submit"
              fontSize="18px"
              fontWeight={500}
              py="25px"
              px="60px"
              color="#fff"
              bg="#0000ff"
              mt="20px"
              _hover={{
                color: "#000",
                background: "#fff",
                boxShadow: "0 0 5px #0000ff",
                border: "#fff",
              }}
              transition="background 0.5s"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Contact;
