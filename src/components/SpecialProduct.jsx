import React from 'react'
import Container from './Container'
import Image from './Image'
import Badge from './Badge'
import productNine from '../assets/ProductNine.png'
import productTen from '../assets/ProductTen.png'
import productEleven from '../assets/ProductEleven.png'
import productTwelve from '../assets/ProductTwelve.png'


const SpecialProduct = () => {
  return (
    <>
    <Container>
  <div className='flex gap-x-6 pt-[5px] pb-[65px]'>
       <div className="w-1/4 relative">
       <Image imgSrc={productNine} className={"bg-no-repeat bg-center bg-cover"}/>
       <Badge badgeText={"New"} className={"absolute top-4 left-4"}/>
       <div className="flex justify-between">
       <div className='font-bold'>Basic Crew Neck Tee</div>
       <div className='text-gray-600'>$44.00</div>
      </div>
      </div>
      <div className="w-1/4 relative">
      <Image imgSrc={productTen}/>
      <Badge badgeText={"New"} className={"absolute top-4 left-4"}/>
      <div className="flex justify-between">
      <div className='font-bold'>Basic Crew Neck Tee</div>
      <div className='text-gray-600'>$44.00</div>
      </div>
      </div>
      <div className="w-1/4 relative">
      <Image imgSrc={productEleven}/>
      <Badge badgeText={"New"} className={"absolute top-4 left-4"}/>
      <div className="flex justify-between">
      <div className='font-bold'>Basic Crew Neck Tee</div>
      <div className='text-gray-600'>$44.00</div>
      </div>
      </div>
      <div className="w-1/4 relative">
      <Image imgSrc={productTwelve}/>
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

export default SpecialProduct