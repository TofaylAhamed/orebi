import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'

const BannerTwo = () => {
  return (
       <div className='pt-[30px] pb-[100px]'>
         <Link to={"/shop"}>
    <Container>
        <div className="bg-[url(src/assets/BannerTwo.png)] h-[300px] bg-no-repeat bg-center bg-cover"></div>
    </Container>
    </Link>
       </div>
  )
}

export default BannerTwo