import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import LightSpeed from "react-reveal/LightSpeed";
// import Slide from "react-reveal/Slide";
// import Fade from "react-reveal/Fade";
import styles from "./skills.module.css";
function SkillCard({ text, icon }) {
  return (
    <Box className="skills-card">
      <Center className={styles.skillbadge}>
        <LightSpeed left>
          <Box
            border="1px solid #EAE7DC"
            cursor="pointer"
            bg={"#196DB9"}
            boxShadow="base"
            padding={{ base: "15px 10px 10px 5px", lg: "28px 25px 0 25px" }}
            borderRadius="10px"
            width={{ base: "110px", lg: "130px" }}
            height={{ base: "130px", lg: "150px" }}
            sx={{ transition: "background ,color .5s" }}
            transition="background .5s"
            color="white"
            _hover={{ backgroundColor: "#669DD0", color: "black" }}
          >
            <Center>
              <Box width="50px" height="50px">
                <Image className="skills-card-img" src={icon} />
              </Box>
            </Center>
            <Center marginTop="16px">
              <Text
                className="skills-card-name"
                fontSize={{ base: "20px" }}
                fontWeight={"500"}
              >
                {text}
              </Text>
            </Center>
          </Box>
        </LightSpeed>
      </Center>
    </Box>
  );
}

export default SkillCard;