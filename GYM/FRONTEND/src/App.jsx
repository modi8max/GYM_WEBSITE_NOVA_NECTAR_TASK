/* eslint-disable no-unused-vars */

import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router} from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSessions from './components/WorkoutSessions';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BMIcalculator from './components/BMIcalculator';
import Footer from './components/Footer';

const App = () => {
  return (
  
    <Router>
    <Navbar></Navbar>
    <Hero/>
    <WorkoutSessions/>
    <Gallery/>
    <Pricing/>
    <Contact/>
    <BMIcalculator/>
    <Footer/>
    <ToastContainer theme='dark' position='top-center'></ToastContainer>
   </Router>
  )
}

export default App
