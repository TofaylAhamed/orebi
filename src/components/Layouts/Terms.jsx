import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck, FaUndo  } from "react-icons/fa";

const Terms = () => {
  return (
    <>
    <div className='py-4 bg-blue-300'>
        <Container>
        <Flex className={'items-center justify-between'}>
            <div className='flex gap-x-2 items-center text-[16px] text-gray-400'>
                <PiNumberTwoBold className='text-black'/>
                Two years warranty
            </div>
            <div className='flex gap-x-2 items-center text-[16px] text-gray-400'>
                <FaTruck className='text-black'/>
                Free shipping
            </div>
            <div className='flex gap-x-2 items-center text-[16px] text-gray-400'>
                <FaUndo className='text-black'/>
                Return policy in 30 days
            </div>
        </Flex>
    </Container>
    </div>
    </>
  )
}

export default Terms