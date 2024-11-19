import { Flex, Heading, Image, Text, Box } from "@chakra-ui/react";

import styles from "./hero.module.css"

export const Hero = () => (
    <div className={styles.hero}>
      <div className={styles['hero-image']}>
              <Image width={"100%"} src={"images/the-couple-hero.jpg"}></Image>
      </div>
      <div className={styles['hero-text']}  style={{minHeight: '400px',display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
      }}>
              <Text border={"3px solid"} px={5} mb={8} py={2} fontSize={"37px"} fontWeight={500}  fontFamily={"'Kaushan Script', 'serif'"} color="rgb(180, 106, 72)"> Louise & Wilson </Text>
              <Text display={"block"} fontFamily={"'Kaushan Script', 'serif'"} fontSize={"37px"} mb={2}> Together with Their Families</Text>
              <Text maxWidth={"27rem"} fontFamily={"Poppins"}>Request The Honor of Your Presence at Their Wedding Ceremony and Reception July 11, 2026</Text>
           <Image width={"100px"} src={"images/divider-arrow.svg"} mt={10}></Image>

      </div>
    </div>
);

Hero.defaultProps = {
  title: "with-chakra-ui-typescript",
};
