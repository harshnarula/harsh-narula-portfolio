import Navbar from './components/Navbar';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import Social from './components/Social';
import Contact from './components/Contact';
import { Analytics } from '@vercel/analytics/react';
import './App.css';


function App() {

  const [social, setSocial] = useState({
    linkedIn: false,
    github: false,
    twitter: false,                                                         
    gmail: false,
    instagram: false,
  })

  const [projects, setProjects] = useState([]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [width, setWidth] = useState(window.innerWidth);
  

  return (
    <>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home
            width = {width}
            setWidth = {setWidth}
          
          />} />
          <Route path="/social" element={<Social

              social = {social}
              setSocial = {setSocial}
              setWidth = {setWidth}

          />} />
          <Route path="/projects" element={<div><Project 
              projects = {projects}
              setProjects = {setProjects}
              width = {width}
              setWidth = {setWidth}

          />
          </div>} />

        </Routes>
        <Contact contact ={contact} setContact = {setContact}/>
      </div>
    </Router>
    <Analytics />
    </>
  );
}

export default App;
