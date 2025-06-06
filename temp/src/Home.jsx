import React from "react";
import { Heading, Text, Image, Circle, Box, Flex, Button, HStack } from "@chakra-ui/react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import BlogImage from "/src/assets/blogimg.jpg"

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    hidden: { opacity: 0, x: -25 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
  };


    const LoopInc = "https://i.imgur.com/Ctm2QG5.png"
    const MusicPlayer = "https://i.imgur.com/4gFf9gG.png"

    return (

      <>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Heading as="h1" color="teal.500" mb = "20px" mt="20px"
          textAlign="center" fontSize="7xl" fontWeight="extrabold" 
        >
          Inicio
        </Heading>


        <Text whiteSpace="pre-line" fontWeight="normal" textAlign="center" mt="20px">
            ¡Hola! Soy Miguel. Soy un pequeño desarrollador en crecimiento y constante aprendizaje
            En todo mi recorrido de manera autónoma he realizado algunos proyectos aprendiendo en base a tutoriales,
            documentación y uso de IA. A continuación, te mostraré cada uno de mis proyectos más relevantes y te hablaré
            un poco sobre ellos:
        </Text>

        <Text color= "white" fontSize="md" marginTop="5px" fontWeight="normal" textAlign="center" mt="20px">
              Aquí te muestro un poco sobre mis proyectos
        </Text>

        <Heading as="h2" textAlign="center" fontSize="xl" mt="20px">
        Mis Proyectos Destacados
        </Heading>

      </motion.div>
      
      

      
      <Flex mt="20px" flexWrap="wrap" >
        {/*Project 1*/}
      <Flex width="33%">
      <motion.div 
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >

        <Circle size="200px" overflow="hidden"  marginLeft="100px"  marginBottom="20px">
        <a href="https://github.com/ReflexivePython/LoopInc" target="_blank" rel="noopener noreferrer">
        <Image src={LoopInc} alt="Loop Inc Logo" width="200px" borderRadius="50%" height="100%" objectFit="fill" align="center"
        _hover={{transform: 'scale(1.10)'}}  />
        </a>
        </Circle>

        <Text fontSize="xl" textAlign="center"  marginRight="10" marginLeft="10"
        color="teal.500" fontWeight="bold" > Loop Inc </Text>
        
        <Text fontSize="large" textAlign="center" mt="10px" marginRight="50px" marginLeft="50px">
        Simulador de vida laboral en bucle.
        Un día más en la oficina. Las mismas tareas, el mismo cubículo, los mismos correos...
        Pero algo no encaja.
        Mientras la rutina se repite, pequeñas grietas empiezan a aparecer.
        ¿Hasta cuándo vas a esperar que las cosas cambien?
        </Text>

      </motion.div>
      </Flex>
      

      {/*Project 2*/}
      <Flex width="33%">
      <motion.div 
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >

        <Circle size="200px" overflow="hidden"  marginLeft="100px" marginBottom="20px">
        <a href="https://github.com/ReflexivePython/MusicPlayer" target="_blank" rel="noopener noreferrer">
        <Image src={MusicPlayer} alt="MusicPlayer Logo" width="200px" borderRadius="50%" height="100%" objectFit="fill" align="center"
        _hover={{transform: 'scale(1.10)'}}  />
        </a>
        </Circle>

        <Text fontSize="xl" textAlign="center"  marginRight="10" marginLeft="10"
        color="teal.500" fontWeight="bold" > MusicPlayer </Text>

        <Text fontSize="large" textAlign="center" mt="10px" marginRight="50px" marginLeft="50px">
        Un reproductor de música hecho con React + Vite.
        Se trata de mi primer proyecto utilizando esta herramienta.
        </Text>

      </motion.div>
      </Flex>


      {/*Project 3*/}
      <Flex width="33%">
      <motion.div 
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >

        <Circle size="200px" overflow="hidden"  marginLeft="100px" marginBottom="20px">
        <a href="/My-Portfolio/#/blog/vida-y-bloques" target="_blank" rel="noopener noreferrer">
        <Image src={BlogImage} alt="Blog Image" width="200px" borderRadius="50%" height="100%" objectFit="fill" align="center" 
        _hover={{transform: 'scale(1.10)'}} />
        </a>
        </Circle>

        <Text fontSize="xl" textAlign="center" marginRight="10" marginLeft="10"
        color="teal.500" fontWeight="bold"> Blogs </Text>

        <Text fontSize="large" textAlign="center" mt="10px" marginRight="50px" marginLeft="50px">
        En mis tiempos libres también me dedico un poco a la redacción y escritura, así que puedes pasarte
        por mis blogs y darte una buena lectura acompañada de un cafecito.
        </Text>

      </motion.div>
      </Flex>
      </Flex>


      {/*Experience*/}
      <Box textAlign="center" mt="50px">
  <Text fontSize="5xl" color="teal.600" fontWeight="bolder">
    Mis habilidades:
  </Text>

  <motion.div ref={ref} variants={variants} initial="hidden" animate={isInView ? 'visible' : 'hidden'}>
    <Box as="ul" listStyleType="none" color="white" fontSize="lg" fontWeight="normal" mt="30px">
      <li>• Diseño y maquetación web</li>
      <li>• Integración de contenido</li>
      <li>• Habilidades de escritura clara y concisa</li>
      <li>• Organización de ideas y redacción</li>
      <li>• Creatividad y narrativa de diseño</li>
      <li>• Pensamiento lógico y algorítmico</li>
      <li>• Diseño de mecánicas de videojuegos</li>
    </Box>

    <Text mt="20px" mx="50px" color="white">
      Mi especialidad es el desarrollo creativo y la narración de
      historias interactivas a través de videojuegos y contenido digital.
    </Text>
  </motion.div>
</Box>


      {/*Call to Action*/}
      <motion.div
        ref={ref}  variants={variants}
        initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          <Text textAlign="center" mt="40px" fontSize="3xl"  fontWeight="bold">
            Así que, ahora que diste un pequeño recorrido por mi sitio web, ¿Quieres saber más?
            Pulsa el botón de aquí abajo para ir a la siguiente sección
          </Text>

          <HStack justify="center">
          <Link to="/About" style={{ width: '80%', textAlign: 'center' }}>
          <Button mt="20px" mb="50px" variant="ghost" bg="teal" width="20%" fontWeight="bold"
          _hover={{transform: 'scale(1.05)', boxShadow: 'md'}}>
            Ir a la siguiente sección
          </Button>
          </Link>
          </HStack>

      </motion.div>
    </>
    );
  }
  
  export default Home;