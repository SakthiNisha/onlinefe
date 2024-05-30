import React from 'react'
import PageHeader from './Header'
import PageFooter from './Footer'
import Search from './components/Search'
import FruitProducts from './components/FruitProducts'

const Fruits = () => {
  return (
    <>
    <PageHeader />
    <Search />
    <FruitProducts />
    <PageFooter />
    </>
  )
}

export default Fruits