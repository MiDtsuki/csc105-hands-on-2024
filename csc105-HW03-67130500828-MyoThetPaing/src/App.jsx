import React from 'react';
import Home from './pages/Home';
import Navbar from './assets/Navbar';
import Gallery from './pages/Gallery';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Gallery />
    </div>
  );
}

export default App;