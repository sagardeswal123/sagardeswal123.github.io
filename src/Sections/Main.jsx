import { useEffect } from "react";
// import About from "./About";

// import Contacts from "./Contacts";
import Home from "./Home";
import Navbar from "../components/Navbar";
import Projects from "./Projects";
import { Box, Text } from "@chakra-ui/react";
import Skills from "./Skills";
import GithubStats from "./GithubStats/GithubStats";
import About from "./About/About";
import Contact from "./Contact";
// import { BsBalloonHeartFill } from "react-icons/bs";
function Main() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  });
  const scrollToSection = (elementRef) => {
    console.log(elementRef);
    document.getElementById(elementRef).scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container">
        <div style={{ position: "sticky", top: "0px", zIndex: 11 }}>
          <Navbar onClick={(e) => scrollToSection(e)} />
        </div>
        <Home/>
        <About />
        <Skills />
        <Projects />
        <GithubStats />
        <Contact />
        <Box
          h="50px"
          bg="rgb(119, 143, 187)"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {/* <Image src={"icons8-heart-balloon-32.png"}></Image> */}
          <Text fontSize={"14px"} color="#fff">
            Made by Sagar Deswal
          </Text>
          {/* <Image src={"icons8-heart-balloon-32.png"}></Image> */}
        </Box>
      </div>
    </>
  );
}

export default Main;