import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Commitment from '../components/Commitment'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Category/>
    <Commitment/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default Home