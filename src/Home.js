import React from 'react'
import PageHeader from './Header'
import PageFooter from './Footer'
import HeroSection from './components/HeroSection'
import HomeProducts from './components/HomeProducts'

const Home = () => {
  return (
    <>
    <PageHeader />
    <HeroSection />
    <HomeProducts />
    <PageFooter />
    </>
  )
}

export default Home