import React from 'react'
import Product from '../Product'
import Container from '../Container'

const NewArrival = () => {
  return (
    <>
    <div className=''>
        <Container>
            <h3 className='pb-4 text-3xl font-bold'>New Arrival</h3>
            <Product/>
        </Container>

    </div>
    </>
  )
}

export default NewArrival