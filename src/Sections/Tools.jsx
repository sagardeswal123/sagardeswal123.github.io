import React from 'react'
import SkillBox from '../components/SkillBox'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import git from "../Images/Skills/git.png"
import github from "../Images/Skills/github.png"
import netlify from "../Images/Skills/netlify.png"
import postman from "../Images/Skills/postman.png"
import vercel from "../Images/Skills/vercel.png"

const Tools = () => {
  return (
    <div>
        <Text
        mt="20px"
        color="black"
        textAlign={"center"}
        className="skill-image-box"
        fontSize={{ base: "2xl", lg: "4xl" }}
      >
        Tools
      </Text>
      <Box
        border={"1px solid whit"}
        display={"flex"}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
        w={{ lg: "80%" }}
        m={{ lg: "5px auto 20px auto" }}
        pt={{ lg: "10px" }}
        pb={{ base: "30px" }}
      >
        <Box
          w={{ base: "95%", lg: "82%", xl: "60%" }}
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
              <SkillBox icon={git} text={"Git"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={github} text={"Github"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={netlify} text={"Netlify"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={vercel} text={"Vercel"} />
            </GridItem>
            <GridItem w="100%">
              <SkillBox icon={postman} text={"Postman"} />
            </GridItem>
            {/* <GridItem w="100%">
              <SkillBox icon={postman} text={"Postman"} />
            </GridItem> */}
          </Grid>
        </Box>

      </Box>
        
    </div>
  )
}

export default Tools