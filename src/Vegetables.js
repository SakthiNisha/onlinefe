import React from 'react'
import PageHeader from './Header'
import PageFooter from './Footer'
import Search from './components/Search'
import VegProducts from './components/VegProducts'

const Vegetables = () => {
  return (
    <>
    <PageHeader />
    <Search />
    <VegProducts />
    <PageFooter />
    </>
  )
}

export default Vegetables