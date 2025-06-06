import React from "react";
import { Heading, Text, Image, SimpleGrid, Box, Flex, Button, HStack } from "@chakra-ui/react";
import { motion} from 'framer-motion';
import { useState } from "react";



function Achievements() {
  return (<>
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <Heading as="h1" size="7xl" color="teal.500"
        textAlign="center" fontWeight="extrabold" mb={6}>
        Logros
      </Heading>

      <Text textAlign="center" fontSize="2xl"> 
        A continuación, verás los certificados que he ganado de forma autónoma durante este proceso.
      </Text>
    </motion.div>



    <SimpleGrid columns={[1, 2]} spacing={10} mt="30px">

    <motion.div
    initial={{ opacity: 0, y: +50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.0 }}>

    <Box textAlign="center">
    <a href="/My-Portfolio/achievements/javascript_certificate.png" target="_blank" rel="noopener noreferrer">
        <Image src="/My-Portfolio/achievements/javascript_certificate.png" 
        alt="Certificado JavaScript" boxSize="450px" mx="auto" objectFit="contain"
        _hover={{transform: 'scale(1.05)'}} />
    </a>

        <Text fontWeight="bold" color="teal.500">
            Certificado de JavaScript,
            otorgado por CISCO Networking Academy
        </Text>
    </Box>
    </motion.div>

    <motion.div
    initial={{ opacity: 0, y: +50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2.0 }}>
    <Box textAlign="center" mb="50px">
    <a href="/My-Portfolio/achievements/python_certificate.png" target="_blank" rel="noopener noreferrer">
        <Image src="/My-Portfolio/achievements/python_certificate.png" 
        alt="Certificado JavaScript" boxSize="450px" mx="auto" objectFit="contain"
        _hover={{transform: 'scale(1.05)'}} />
    </a>
        <Text fontWeight="bold" color="teal.500">
            Certificado de Python,
            otorgado por CISCO Networking Academy
        </Text>
    </Box>
    </motion.div>

    </SimpleGrid>

    </>

  );
}

export default Achievements;