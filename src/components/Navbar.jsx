import React from "react";
import { Show, Box, Hide, Flex, Spacer, Image, Button,Icon } from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import logo from "../logo/logo.png"
import { Link } from "react-scroll";
import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  VStack,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarButton=({ text, className, color, id })=> {
    return (
      <Button
        id="resume-button-1"
        className="nav-link resume"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1e4atkuE609mDht9BdIPXbHDHNb9EtD82/view",
            "_blank"
          )
        }
        bg="#605454"
        ml="4px"
        mr={{ base: "4px", sm: "0px" }}
        p={{ "2xl": "10px" }}
        color={"White"}
        _hover={{ background: "black" }}
      >
        <a
          id="resume-link-1"
          href="https://drive.google.com/uc?export=download&id=1e4atkuE609mDht9BdIPXbHDHNb9EtD82"
          download={
            "https://drive.google.com/uc?export=download&id=1e4atkuE609mDht9BdIPXbHDHNb9EtD82"
          }
        >
          Resume <Icon as={AiOutlineArrowDown} />
        </a>
      </Button>
    );
  }

function Navbar() {
  return (
    <Flex
      id="nav-menu"
      bg="rgb(127,139,162)"
      position={"sticky"}
      top={0}
      h={"60px"}
      alignItems={"center"}
      zIndex={9}
      boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}
    >
      <Box
        border={"1px solid re"}
        ml={{ lg: "40px" }}
        width={{ base: "", sm: "", md: "20%", lg: "20%" }}
      >
        <Image src={logo} width={{ base: "40%",sm:"30%", md: "80%", lg: "50%" }} />
      </Box>
      <Spacer />
      <Hide below="md">
        <Box
          border={"1px solid re"}
          mr={{ md: "30px", lg: "20px", xl: "10px", "2xl": "20px" }}
          minWidth={"550px"}
          w={{ md: "80%", lg: "65%", xl: "45%", "2xl": "45%" }}
        >
          <Flex alignItems={"end"} justifyContent={"end"}>
            <Link
              className={"nav-link home"}
              to="home"
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
            >
              <Button
                border={"1px solid re"}
                color={"white"}
                bg="transparent"
                _hover={{ color: "#0a0b0c", backgroundColor: "white" }}
              >
                Home
              </Button>
            </Link>
            {/* <Spacer /> */}
            <Link
              className={"nav-link about"}
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Button
                color={"white"}
                bg="transparent"
                _hover={{ color: "#0a0b0c", backgroundColor: "white" }}
              >
                About
              </Button>
            </Link>

            {/* <Spacer /> */}
            <Link
              className={"nav-link skills"}
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Button
                color={"white"}
                bg="transparent"
                _hover={{ color: "#0a0b0c", backgroundColor: "white" }}
              >
                Skills{" "}
              </Button>
            </Link>

            {/* <Spacer /> */}
            <Link
              className={"nav-link projects"}
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <Button
                color={"white"}
                bg="transparent"
                _hover={{ color: "#0a0b0c", backgroundColor: "white" }}
              >
                Projects
              </Button>
            </Link>
            {/* <Spacer /> */}

            {/* <Link
              to="stats"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button
                color={"white"}
                bg="transparent"
                _hover={{ color: "#0a0b0c", backgroundColor: "white" }}
              >
                Github Stats
              </Button>
            </Link> */}
            {/* <Spacer /> */}

            <Link
              className={"nav-link contact"}
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <Button
                color={"white"}
                bg="transparent"
                _hover={{ color: "#0a0b0c", backgroundColor: "white" }}
              >
                Contacts
              </Button>
            </Link>

            {/* <Spacer /> */}

            <NavbarButton
              text={"Resume"}
              color="#fff"
              bgcolor="rgb(119, 143, 187)"
              className={"nav-link resume"}
              id="resume-button-1"
            />

            {/* <Spacer /> */}
          </Flex>
        </Box>
      </Hide>

      <Show below="md">
        <MobNavbar />
      </Show>
    </Flex>
  );
}

export default Navbar;


const MobNavbar=()=> {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const handleResume = () => {
    window.open(
      "https://drive.google.com/file/d/11AwYT97eH7iNnqUxyKt9rIBGCzYu4RuK/view"
    );
    onClose();
  };
  return (
    <>
      <Box backgroundColor="#005c9f" padding="8px" height="50px">
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Spacer />
          <Button ref={btnRef} color="black" bgColor="#005c9f" onClick={onOpen}>
            <Icon as={GiHamburgerMenu} fontSize="32px" />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <VStack gap={4}>
                  <Box width="100%">
                    <Link
                      to="home"
                      spy={"true"}
                      smooth={"true"}
                      offset={-100}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        // text="About"
                        onClick={onClose}
                        section="home"
                      >
                        Home
                      </Button>
                    </Link>
                  </Box>
                  <Box width="100%">
                    <Link
                      to="about"
                      spy={"true"}
                      smooth={"true"}
                      offset={20}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        text="About"
                        onClick={onClose}
                        section="about"
                      >
                        About
                      </Button>
                    </Link>
                  </Box>
                  <Box width="100%">
                    <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        text="Skills"
                        onClick={onClose}
                        section="skills"
                      >
                        Skills
                      </Button>
                    </Link>
                  </Box>
                  <Box width="100%">
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        text="Projects"
                        onClick={onClose}
                        section="projects"
                      >
                        Projects
                      </Button>
                    </Link>
                  </Box>
                  {/* <Box width="100%">
                    <Link
                      to="stats"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        text="Contact"
                        onClick={onClose}
                        section="contact"
                      >
                        Github stats
                      </Button>
                    </Link>
                  </Box> */}
                  <Box width="100%">
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={20}
                      duration={500}
                    >
                      <Button
                        width="100%"
                        text="Contact"
                        onClick={onClose}
                        section="contact"
                      >
                        Contact
                      </Button>
                    </Link>
                  </Box>
                  <Box width="100%">
                    <Button
                      width="100%"
                      text="Contact"
                      onClick={handleResume}
                      section="contact"
                    >
                      <a
                        href="https://drive.google.com/uc?export=download&id=1e4atkuE609mDht9BdIPXbHDHNb9EtD82"
                        download={
                          "https://drive.google.com/uc?export=download&id=1e4atkuE609mDht9BdIPXbHDHNb9EtD82"
                        }
                      >
                        Resume
                      </a>
                    </Button>
                  </Box>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </>
  );
}