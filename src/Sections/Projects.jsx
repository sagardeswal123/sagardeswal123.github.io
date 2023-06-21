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
    <div id="projects">
      <Container  maxW={"4xl"} marginTop={"100px"}>
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
          title="FitQuest"
          discription="FitQuest is an innovative, gamified fitness tracking application designed to provide users with a curated list of daily workouts for optimal health and wellness."
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiNetlify}
          githubUrl="https://github.com/izhar100/festive-crayon-1023"
          netlifyUrl="https://fitquests.netlify.app/"
          banner={FitQuest}
        />
        <ProjectCard 
          title="Quick Loan"
          discription="Our user-friendly loan distribution website makes borrowing effortless, connecting borrowers with lenders for quick and easy access to funds."
          jsIcon={SiReact}
          htmlIcon={SiChakraui}
          cssIcon={SiNetlify}
          githubUrl="https://github.com/sagardeswal123/decorous-lake-5250"
          netlifyUrl="https://decorous-lake-5250.vercel.app/"
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
          title="Alpha Lyst"
          discription="AlphaLyst.com is a clone of Lyst.com. Lyst is a fashion technology company and premium shopping app which has a wide variety of clothes and accessories. This project was developed by a team of five in 5 days."
          jsIcon={IoLogoJavascript}
          htmlIcon={SiHtml5}
          cssIcon={SiCss3}
          githubUrl="https://github.com/Vchandankumarr/smart-sign-7322"
          netlifyUrl="https://symphonious-lebkuchen-33f9c1.netlify.app/"
          banner={Alpha}
        />
        {/* <Github/>
        <GithubStreak/>
        <GithubStateCard/> */}
       </Container>
      {/* <GithubLanguage/> */}
     </div>
  );
};

export default Projects;