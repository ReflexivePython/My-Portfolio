import React from "react";
import { Heading, Text, Image, Circle, Box, Flex, Button, HStack } from "@chakra-ui/react";
import { motion, useInView  } from "framer-motion";
import { useRef } from 'react';
import {Link} from "react-router-dom"

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };


    return (
      <>
      <motion.div initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}>

        <Heading as="h1" size="7xl" color="teal.500" 
        textAlign="center" fontSize="7xl" fontWeight="extrabold"
        >

          Un viaje a través de códigos y letras

        </Heading>

        <Text textAlign="center" fontWeight="normal" mt="10px" fontSize="2xl">
          En esta sección, te contaré un poco acerca de mi trayectoria y el qué me trajo hasta aquí.
        </Text>
      </motion.div>

      {/*My path*/}
      <motion.div ref={ref}  variants={variants}
        initial="hidden" animate={isInView ? 'visible' : 'hidden'}>

          <Text textAlign="center" fontSize="4xl" fontWeight="bolder" color="teal.500" mt="25px">
            Mi trayectoria
          </Text>

          <Text textAlign="center" fontSize="xl" mt="10px" ml="50px" mr="50px">
            Desde hace aproximadamente hace dos años he estudiado de manera independiente diferentes
            lenguajes de programación, a la par que he tomado cursos en línea que me enseñan
            acerca de la lógica de la programación. Durante todo este recorrido, me he enfocado en
            aprender acerca de lenguajes como JavaScript, Python y GDScript puesto que son
            muy versátiles y poderosos a la hora de realizar diferentes proyectos.
            A la par de que he tomado inspiración de algunos artistas para crear mis propios escritos
            o diseño en pixel art (tal como puedes ver en mi proyecto "Loop Inc").
            En particular, me apasiona la creación de experiencias interactivas y la resolución de problemas complejos 
            a través del código. Disfruto de la flexibilidad de JavaScript para construir interfaces web dinámicas, la 
            versatilidad de Python para diversas tareas y la potencia de GDScript en el mundo del desarrollo de videojuegos. 
            Algunos ejemplos son: </Text>

            <ul style={{ marginTop: "20px", textAlign : "center" }}>
            <li style={{ marginTop: "20px" }}>
              <strong>• JavaScript</strong>
            <p style={{ marginTop: "5px", fontWeight: "normal" }}>
              En donde me he enfocado en el área de FrontEnd como puedes observar,
              diseñando y montando la lógica del lugar.
            </p>
            </li>

            <li style={{ marginTop: "20px" }}>
              <strong>• GDScript</strong>
            <p style={{ marginTop: "5px", fontWeight: "normal" }}>
              En el cual he diseñado la lógica, mecánicas, animaciones y sprite
              de diferentes objetos dentro de un videojuego.
            </p>
            </li>

            <li style={{ marginTop: "20px" }}>
              <strong>• Redacción y Escritura</strong>
            <p style={{ marginTop: "5px", fontWeight: "normal" }}>
              He escrito algunos Blogs, también me dedico a crear las historias de mis 
              futuros proyectos, y a veces escribo poesía cuando surge.
            </p>
            </li>

            <li style={{ marginTop: "20px" }}>
              <strong>• Diseño de personajes, escenarios y Sprites</strong>
            <p style={{ marginTop: "5px", fontWeight: "normal" }}>
              También, a menudo hago diseño de personajes, escenarios, y minijuegos
              mediante Pixel-Art.
            </p>
            </li>
            </ul>

          

          <Text mt="50px" textAlign="center" fontSize="xl">
          Me considero una persona proactiva, curiosa y con una gran disposición para aprender y colaborar en 
          proyectos desafiantes. Valoro la comunicación clara y el enfoque en la creación de productos de calidad.

          Si estás interesado en conectar o colaborar, puedes ir a mi página de contacto:
          </Text>

          <HStack justify="center">
          <Link to="/Contact" style={{ width: '80%', textAlign: 'center' }}>
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
  
  export default About;