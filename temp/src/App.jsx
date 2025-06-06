import React, { useState } from 'react'
import './index.css'
import Home from "./Home"
import About from "./About"
import Contact from './Contact'
import Blog from "./Blog"
import Achievements from "./Achievements"

import BlogPost from "./BlogPost"

import { HashRouter, Routes, Route, Link } from 'react-router-dom'

{/*NavigationBar*/}
import NavigationBar from './NavigationBar'




function App() {

  return (
    <HashRouter>
      <nav className="flex justify-center my-4">
        <NavigationBar></NavigationBar>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for Home */}
        <Route path="/about" element={<About />} /> {/* Route for About */}
        <Route path="/contact" element={<Contact />} /> {/* Route for Contact */}
        <Route path="/blog" element={<Blog />} /> {/* Route for Blog */}
        <Route path="/achievements" element={<Achievements />} /> {/* Route for Achievements */}

        {/*Blog Routes*/}
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </HashRouter>
  )
}

export default App
