import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Banner1 from '../components/Banner1'
import Banner2 from '../components/Banner2'
import Category from '../components/Category'
import Commitment from '../components/Commitment'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Banner1/>
    <Banner2/>
    <Category/>
    <Commitment/>
    <FAQ/>
    <Footer/>
    </>
  )
}

export default Home