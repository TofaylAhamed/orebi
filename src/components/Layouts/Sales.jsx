import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Phones from '/src/assets/Phones.png'
import Electronics from '/src/assets/Electronics.png'
import Furniture from '/src/assets/Furniture.png'

const Sales = () => {
  return (
    <>
    <div className='pt-[170px] pb-[140px]'>
        <Container>
            <Flex className={'gap-x-8.5 iteems-start'}>
                <div className='w-1/2'>
                    <Image imgSrc={Phones} className={'w-full'}/>
                </div>
                <div className='w-1/2'>
                    <Image imgSrc={Electronics} className={'pb-8.5 w-full'}/>
                    <Image imgSrc={Furniture} className={'w-full'}/>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Sales