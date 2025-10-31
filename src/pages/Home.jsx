import React from 'react';
import Header from '../component/Header'
import Hero from '../component/Hero';
import About from '../component/About';
import ModelDevelopment from '../component/ModelDevelopment';
import Gallery from '../component/Gallery';
import Join from '../component/Join';
import Footer from '../component/Footer';
const Home = () => {
  return (
    <div>
    <Header/>
    <Hero/>
    <About/>
    <ModelDevelopment/>
    <Gallery/>
    <Join/>
    <Footer/>
    </div>
  )
}

export default Home
