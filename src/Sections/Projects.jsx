import { Container, Text, Center } from "@chakra-ui/react";
import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNetlify } from 'react-icons/si'
import { SiChakraui } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import FitQuest from "../Images/FitQuest.png"
import booking from "../Images/booking.jpg"
import Quickloan from "../Images/QuickLoan.png"
import Alpha from "../Images/Alpha.png"
// import Github from "../Components/Github";
// import GithubStreak from "../Components/GithubStreak";
// import GithubStateCard from "../Components/GithubStateCard";
// import GithubLanguage from "../Components/GithubLanguage";
import ProjectCard from "../components/ProjectCard";
const Projects = () => {
  return (
    <>
      <Container maxW={"4xl"} marginTop={50}>
        <Center>
        <Text
          as={"span"}
          fontSize={"5xl"}
          fontWeight={"500"}
          position={"relative"}
          _after={{
            content: "''",
            width: "full",
            height: "30%",
            position: "absolute",
            bottom: 1,
            left: 0,
            zIndex: -1,
          }}
        >
          PROJECTS
        </Text>
        </Center>
        <ProjectCard
          title="LensKart.com"
          discription="LensKart is basically an eyecare website with provide sunglasses , eyeglasses and blu-computer glasses at affordable prices"
          jsIcon={IoLogoJavascript}
          htmlIcon={SiHtml5}
          cssIcon={SiCss3}
          githubUrl="https://github.com/dharmikpuri/LensKart-Clone"
          netlifyUrl="https://eyecare-dharmikpuri.vercel.app/"
          banner={FitQuest}
        />
        <ProjectCard 
          title="NordStrom.com"
          discription="Nordstrom is an Fashion website for Men's/Women's which sells various types of fashion Products"
          jsIcon={IoLogoJavascript}
          htmlIcon={SiHtml5}
          cssIcon={SiCss3}
          githubUrl="https://github.com/dharmikpuri/curved-lock-2854"
          netlifyUrl="https://nordstrom-five.vercel.app/"
          banner={Quickloan}
        />
        <ProjectCard  
          title="Booking.com"
          discription="Mbooking.com provides online reservation services. We act as an intermediary (agent) between guests who want to make an accommodation reservation and your hotel, property or temporary/vacation rental"
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiNetlify}
          githubUrl="https://github.com/Subham0629/crowded-push-1335"
          netlifyUrl="https://mbooking.vercel.app/"
          banner={booking}
        />
        <ProjectCard 
          title="Booking.com"
          discription="Mbooking.com provides online reservation services. We act as an intermediary (agent) between guests who want to make an accommodation reservation and your hotel, property or temporary/vacation rental"
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiNetlify}
          githubUrl="https://github.com/Subham0629/crowded-push-1335"
          netlifyUrl="https://mbooking.vercel.app/"
          banner={Alpha}
        />
        {/* <Github/>
        <GithubStreak/>
        <GithubStateCard/> */}
       </Container>
      {/* <GithubLanguage/> */}
     </>
  );
};

export default Projects;