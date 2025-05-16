import React from "react";
import { Heading, Text, Image, Circle, Box, Flex, Button, HStack } from "@chakra-ui/react";
import { motion, useInView } from 'framer-motion';

function Contact() {
    return (
      <motion.div initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}>

        <Heading as="h1" size="7xl" color="teal.500" 
        textAlign="center" fontSize="7xl" fontWeight="extrabold">
          ¡Contáctame!
        </Heading>

        <Text fontSize="2xl" textAlign="center" mt="10px" ml="50px" mr="50px">
          Gracias por interesarte en mis proyectos, si tienes alguna pregunta, propuesta de colaboración
          o simplemente quieres saludar, ¡eres bienvenido!
          Puedes contactarme a mi correo electrónico:
        </Text>

        <HStack justify="center">
          <a href="mailto:miguelagudelo1130@gmail.com" target="_blank" rel="noopener noreferrer"
          style={{ width: '80%', textAlign: 'center' }}>
          <Button mt="20px" mb="50px" variant="ghost" bg="teal" width="20%" fontWeight="bold"
          _hover={{transform: 'scale(1.05)', boxShadow: 'md'}}>
            ¡Aquí!
          </Button>
          </a>
        </HStack>

        <Text fontSize="2xl" textAlign="center" mt="10px" ml="50px" mr="50px">
          También, puedes visitar mi perfil de LinkedIn:
        </Text>

        <HStack justify="center">
          <a href="https://www.linkedin.com/in/miguel-angel-agudelo-97123430a/" target="_blank" rel="noopener noreferrer"
          style={{ width: '80%', textAlign: 'center' }}>
          <Button mt="20px" mb="50px" variant="ghost" bg="teal" width="20%" fontWeight="bold"
          _hover={{transform: 'scale(1.05)', boxShadow: 'md'}}>
            ¡Vamos!
          </Button>
          </a>
        </HStack>

        <Text fontSize="2xl" textAlign="center" mt="10px" ml="50px" mr="50px">
          O incluso, puedes visitar mi perfil de desarrollador en X:
        </Text>

        <HStack justify="center">
          <a href="https://x.com/reflexivepython" target="_blank" rel="noopener noreferrer"
          style={{ width: '80%', textAlign: 'center' }}>
          <Button mt="20px" mb="50px" variant="ghost" bg="teal" width="20%" fontWeight="bold"
          _hover={{transform: 'scale(1.05)', boxShadow: 'md'}}>
            ¡Llévame!
          </Button>
          </a>
        </HStack>


      </motion.div>
    );
  }
  
  export default Contact;