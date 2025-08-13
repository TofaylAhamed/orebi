import React from 'react'
import productFive from '../assets/ProductFive.png'
import productSix from '../assets/ProductSix.png'
import productSeven from '../assets/ProductSeven.png'
import productEaight from '../assets/ProductEaight.png'
import Badge from '../Badge'
import Image  from '../Image'
import Container from '../Container'

const BestSellerProduct = () => {
  return (
    <>
    <Container>
  <div className='flex gap-x-6 pt-[5px] pb-[65px]'>
       <div className="w-1/4 relative">
       <Image imgSrc={productFive} className={"bg-no-repeat bg-center bg-cover"}/>
       <Badge badgeText={"New"} className={"absolute top-4 left-4"}/>
       <div className="flex justify-between">
       <div className='font-bold'>Basic Crew Neck Tee</div>
       <div className='text-gray-600'>$44.00</div>
      </div>
      </div>
      <div className="w-1/4 relative">
      <Image imgSrc={productSix}/>
      <Badge badgeText={"New"} className={"absolute top-4 left-4"}/>
      <div className="flex justify-between">
      <div className='font-bold'>Basic Crew Neck Tee</div>
      <div className='text-gray-600'>$44.00</div>
      </div>
      </div>
      <div className="w-1/4 relative">
      <Image imgSrc={productSeven}/>
      <Badge badgeText={"New"} className={"absolute top-4 left-4"}/>
      <div className="flex justify-between">
      <div className='font-bold'>Basic Crew Neck Tee</div>
      <div className='text-gray-600'>$44.00</div>
      </div>
      </div>
      <div className="w-1/4 relative">
      <Image imgSrc={productEaight}/>
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

export default BestSellerProduct