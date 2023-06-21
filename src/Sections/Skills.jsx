import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import SkillCard from "../components/SkillCard";
import html from "../Images/Skills/html.png";
import css from "../Images/Skills/css.png";
import javaScript from "../Images/Skills/javaScript.png";
import reactIcon from "../Images/Skills/react.png"
import reduxIcon from "../Images/Skills/redux.png"
import mongodb from "../Images/Skills/mongodb.png"
import chakraIcon from "../Images/Skills/Chakra.png"
import express from "../Images/Skills/express.png"
import nodeIcon from "../Images/Skills/node.png"
import typescript from "../Images/Skills/typescript.png"

function Skills() {
  return (
    <Box
      id="skills"
      border={"1px solid re"}
      width={"100%"}
      h={{ "2xl": "95vh" }}
    >
      <Text
        mt="30px"
        color="black"
        textAlign={"center"}
        className="skill-image-box"
        fontSize={{ base: "4xl", lg: "6xl" }}
      >
        Skills{" "}
      </Text>
      <Box
        border={"1px solid whit"}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
        w={{ lg: "80%" }}
        m={{ lg: "20px auto" }}
        pt={{ lg: "50px" }}
        pb={{ base: "30px" }}
      >
        <Box
          w={{ base: "95%", lg: "80%", xl: "60%" }}
          m={"auto"}
          border={"1px solid re"}
          order={{ base: 2, lg: 1 }}
        >
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              sm: "repeat(3,1fr)",
              md: "repeat(5,1fr)",
              lg: "repeat(5,1fr)",
            }}
            gap={6}
          >
            <GridItem w="100%">
              <SkillCard icon={html} text={"HTML"} />
            </GridItem>
            <GridItem w="100%">
              <SkillCard icon={css} text={"CSS"} />
            </GridItem>
            <GridItem w="100%">
              <SkillCard icon={javaScript} text={"Javascript"} />
            </GridItem>
            <GridItem w="100%">
              <SkillCard icon={reactIcon} text={"React"} />
            </GridItem>
            <GridItem w="100%">
              <SkillCard icon={reduxIcon} text={"Redux"} />
            </GridItem>
            <GridItem w="100%">
              <SkillCard icon={chakraIcon} text={"Chakra"} />
            </GridItem>
            <GridItem w="100%">
              <SkillCard icon={mongodb} text={"MongoDB"} />
            </GridItem>
            <GridItem w="100%">
              <SkillCard icon={typescript} text={"TypeScript"} />
            </GridItem>
            <GridItem w="100%">
              <SkillCard icon={express} text={"Express"} />
            </GridItem>
            <GridItem w="100%">
              <SkillCard icon={nodeIcon} text={"NodeJS"} />
            </GridItem>
          </Grid>
        </Box>

        {/* <Box
          width={{ base: "50%", sm: "50%", md: "45%", lg: "35%" }}
          border={"1px solid re"}
          
          display={"flex"}
          justifyContent={"center"}
          order={{ base: 1, lg: 2 }}
          my={{ base: "15px" }}
        >
          <Text fontSize={{ base: "2xl", lg: "5xl" }} color={"black"}>
            Skills
          </Text>
        </Box> */}
      </Box>
      {/* <Box
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
        border={"1px solid whit"}
        w={{ lg: "80%" }}
        m={{ lg: "20px auto" }}
        pt={{ lg: "50px" }}
        pb={{ base: "50px" }}
      > */}
        {/* <Box
          width={{ base: "50%", sm: "50%", md: "35%", lg: "25%" }}
          border={"1px solid re"}
          className="skill-image-box"
          display={"flex"}
          justifyContent={"center"}
          order={{ base: 1, lg: 1 }}
        >
          <Text
            mb={{ base: "15px" }}
            fontSize={{ base: "2xl", lg: "5xl" }}
            color={"black"}
          >
            Tools
          </Text>
        </Box> */}
        {/* <Box
          w={{ base: "95%", lg: "80%", xl: "55%" }}
          m={"auto"}
          border={"1px solid re"}
          order={{ base: 2, lg: 2 }}
        >
          <Grid
            templateColumns={{
              base: "repeat(3, 1fr)",
              sm: "repeat(3,1fr)",
              md: "repeat(5,1fr)",
              lg: "repeat(5,1fr)",
            }}
            gap={6}
          >
            <GridItem w="100%">
              <SkillBox icon={"git.png"} text={"Git"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"github-1.png"} text={"Github"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"netlify.png"} text={"Netlify"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"vercel.png"} text={"Vercel"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={"postman-icon.png"} text={"Postman"} />
            </GridItem>
          </Grid>
        </Box> */}
      {/* </Box> */}
    </Box>
  );
}

export default Skills;