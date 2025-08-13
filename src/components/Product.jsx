import React from 'react'
import Badge from './Badge'
import Image from './Image'
import productOne from '../assets/productOne.png'
import productTwo from '../assets/productTwo.png'
import productThree from '../assets/productThree.png'
import productFour from '../assets/productFour.png'
import Container from '/Container'

const Product = () => {
  return (
    <>
    <Container>
  <div className='flex gap-x-6 pt-[5px] pb-[65px]'>
       <div className="w-1/4 relative">
       <Image imgSrc={productOne} className={"bg-no-repeat bg-center bg-cover"}/>
       <Badge badgeText={"New"} className={"absolute top-4 left-4"}/>
       <div className="flex justify-between">
       <div className='font-bold'>Basic Crew Neck Tee</div>
       <div className='text-gray-600'>$44.00</div>
      </div>
      </div>
      <div className="w-1/4 relative">
      <Image imgSrc={productTwo}/>
      <Badge badgeText={"New"} className={"absolute top-4 left-4"}/>
      <div className="flex justify-between">
      <div className='font-bold'>Basic Crew Neck Tee</div>
      <div className='text-gray-600'>$44.00</div>
      </div>
      </div>
      <div className="w-1/4 relative">
      <Image imgSrc={productThree}/>
      <Badge badgeText={"New"} className={"absolute top-4 left-4"}/>
      <div className="flex justify-between">
      <div className='font-bold'>Basic Crew Neck Tee</div>
      <div className='text-gray-600'>$44.00</div>
      </div>
      </div>
      <div className="w-1/4 relative">
      <Image imgSrc={productFour}/>
      <Badge badgeText={"New"} className={"absolute top-4 left-4"}/>
      <div className="flex justify-between">
      <div className='font-bold'>Basic Crew Neck Tee</div>
      <div className='text-gray-600'>$44.00</div>
    </div>
    </div>
  </div>
    </Container>
    </>
  )
}

export default Product