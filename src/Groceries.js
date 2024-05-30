import React from 'react'
import PageHeader from './Header'
import PageFooter from './Footer'
import Search from './components/Search'
import GroceryProducts from './components/GroceryProducts'

const Groceries = () => {
  return (
    <>
    <PageHeader />
    <Search />
    <GroceryProducts />
    <PageFooter />
    </>
  )
}

export default Groceries