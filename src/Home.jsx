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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
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
        <Heading as="h1" size="7xl" color="teal.500"
          textAlign="center" fontSize="7xl" fontWeight="extrabold" 
        >
          Inicio
        </Heading>
        <Heading as="h2" textAlign="center" fontSize="xl">
          <Text whiteSpace="pre-line" fontWeight="normal">
            ¡Hola! Soy Miguel. Soy un pequeño desarrollador en crecimiento y constante aprendizaje
            En todo mi recorrido de manera autónoma he realizado algunos proyectos aprendiendo en base a tutoriales,
            documentación y uso de IA. A continuación, te mostraré cada uno de mis proyectos más relevantes y te hablaré
            un poco sobre ellos:
          </Text>

          <Text textAlign="center" color="teal.500" marginTop="12" fontSize="3xl" fontWeight="bold">
          Mis Proyectos Destacados

            <Text color= "white" fontSize="md" marginTop="5px" fontWeight="normal">
              Aquí te muestro un poco sobre mis proyectos
            </Text>

          </Text>

        </Heading>
      </motion.div>

      <Flex mt="20px">
        {/*Project 1*/}
      <Flex width="33%">
      <motion.div 
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Text fontSize="xl" textAlign="center"  marginRight="10" marginLeft="10"
        color="teal.500" fontWeight="bold" >

        <Circle size="200px" overflow="hidden"  marginLeft="57px"  marginBottom="20px">
        <a href="https://github.com/ReflexivePython/LoopInc" target="_blank" rel="noopener noreferrer">
        <Image src={LoopInc} alt="Loop Inc Logo" width="200px" borderRadius="50%" height="100%" objectFit="fill" align="center"  />
        </a>
        </Circle>

        Loop Inc
        </Text>
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
        <Text fontSize="xl" textAlign="center" mt={4} marginRight="10" marginLeft="10"
        color="teal.500" fontWeight="bold" >

        <Circle size="200px" overflow="hidden"  marginLeft="57px" marginBottom="20px">
        <a href="https://github.com/ReflexivePython/MusicPlayer" target="_blank" rel="noopener noreferrer">
        <Image src={MusicPlayer} alt="MusicPlayer Logo" width="200px" borderRadius="50%" height="100%" objectFit="fill" align="center"  />
        </a>
        </Circle>

        MusicPlayer
        </Text>
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
        <Text fontSize="xl" textAlign="center" mt={4} marginRight="10" marginLeft="10"
        color="teal.500" fontWeight="bold">

        <Circle size="200px" overflow="hidden"  marginLeft="60px" marginBottom="20px">
        <a href="/blog/vida-y-bloques" target="_blank" rel="noopener noreferrer">
        <Image src={BlogImage} alt="Blog Image" width="200px" borderRadius="50%" height="100%" objectFit="fill" align="center"  />
        </a>
        </Circle>

        Blogs
        </Text>
        <Text fontSize="large" textAlign="center" mt="10px" marginRight="50px" marginLeft="50px">
        En mis tiempos libres también me dedico un poco a la redacción y escritura, así que puedes pasarte
        por mis blogs y darte una buena lectura acompañada de un cafecito.
        </Text>

      </motion.div>
      </Flex>
      </Flex>


      {/*Experience*/}
      <motion.div
        ref={ref}  variants={variants}
        initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

        <Text textAlign="center" mt="100px" fontSize="5xl" color="teal.600" fontWeight="bolder"> 
          Mis habilidades:

          <motion.div
        ref={ref}  variants={variants}
        initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

        <ul style={{fontSize:"0.5em", fontWeight:"normal", color:"white", mt:"30px"}}> 
          <li>• Diseño y maquetación web</li>
          <li>• Integración de contenido</li>
          <li>• Habilidades de escritura clara y concisa</li>
          <li>• Organización de ideas y redacción</li>
          <li>• Creatividad y narrativa de diseño</li>
          <li>• Pensamiento lógico y algorítmico</li>
          <li>• Diseño de mecánicas de videojuegos</li>

          <Text mt="20px" marginLeft="50px" marginRight="50px">
            Mi especialidad es el desarrollo creativo y la narración de
            historias interactivas a través de videojuegos y contenido digital.
          </Text>
        </ul>

        </motion.div>

        </Text>

      </motion.div>

      {/*Call to Action*/}
      <motion.div
        ref={ref}  variants={variants}
        initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          <Text textAlign="center" mt="100px" fontSize="3xl"  fontWeight="bold">
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