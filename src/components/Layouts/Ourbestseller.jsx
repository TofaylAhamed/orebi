import React from 'react'
import Container from './Container'
import BestSellerProduct from '../BestSellerProduct'

const Ourbestseller = () => {
  return ( 
    <>
    <div className=''>
        <Container>
            <h3 className='pt-16 pb-4 text-3xl font-bold'>Our Best Seller</h3>
            <BestSellerProduct/>
        </Container>
    </div>
    </>
   )
}

export default Ourbestseller