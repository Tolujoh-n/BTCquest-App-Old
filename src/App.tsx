import React from 'react';
import logo from './logo.svg';
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      
      <main>
        <p>Here's some content for the main section of the page</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;

