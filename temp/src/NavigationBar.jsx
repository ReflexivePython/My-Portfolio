import { BrowserRouter, Routes, Route, Link , useLocation} from 'react-router-dom'
import { Button, Flex, Box } from "@chakra-ui/react";


function NavigationBar() {
  const location = useLocation();

    return (
      <Flex as="nav" bg="teal.700" color="white" width="100%" justify="start" p={4}>
        
        <Flex flex="1" justify="center">
          <Link to="/" style={{ width: '80%', textAlign: 'center' }}>
            <Button _hover={{transform: 'scale(1.05)', boxShadow: 'md'}}
            boxShadow={location.pathname === '/' ? '0 0 5px white' : 'none'}
            variant="ghost" bg="teal" width="100%">
              Inicio
            </Button>
          </Link>
        </Flex>

        <Flex flex="1" justify="center">
          <Link to="/about" style={{ width: '80%', textAlign: 'center' }}>
            <Button variant="ghost" bg="teal" width="100%"
            _hover={{transform: 'scale(1.05)', boxShadow: 'md'}}
            boxShadow={location.pathname === '/about' ? '0 0 5px white' : 'none'}>
              Acerca de
            </Button>
          </Link>
        </Flex>

        <Flex flex="1" justify="center">
          <Link to="/contact" style={{ width: '80%', textAlign: 'center' }}>
            <Button variant="ghost" bg="teal" width="100%"
            _hover={{transform: 'scale(1.05)', boxShadow: 'md'}}
            boxShadow={location.pathname === '/contact' ? '0 0 5px white' : 'none'}>
              Contáctame
            </Button>
          </Link>
        </Flex>

        <Flex flex="1" justify="center">
          <Link to="/blog" style={{ width: '80%', textAlign: 'center' }}>
            <Button variant="ghost" bg="teal" width="100%"
            _hover={{transform: 'scale(1.05)', boxShadow: 'md'}}
            boxShadow={location.pathname === '/blog' ? '0 0 5px white' : 'none'}>
              Blogs
            </Button>
          </Link>
        </Flex>

      </Flex>
    );
  }

  export default NavigationBar