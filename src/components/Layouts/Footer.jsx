import React from 'react'
import  Container from '../Container';
import Flex from '../Flex';
import { Link } from 'react-router-dom';
import Image from '../Image';
import logo from "/src/assets/logo.png";

const Footer = () => {
  return (
    <>
    <div className="py-10 bg-gray-300">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
            <h3 className='font-bold text-[20px]'>
              Menu
              </h3>
            <ul className="gap-10 text-lg font-Dmsans text-[#767676]">
              <Link to={"/"}>
              <li className="hover:font-bold hover:text-[#262626]">Home</li>
              </Link>
              <Link to={"Shop"}>
              <li className="hover:font-bold hover:text-[#262626]">Shop</li>
              </Link>
              <Link to={"About"}>
              <li className="hover:font-bold hover:text-[#262626]">About</li>
              </Link>
              <Link to={"Contract"}>
              <li className="hover:font-bold hover:text-[#262626]">Contract</li>
              </Link>
              <Link to={"Jounal"}>
              <li className="hover:font-bold hover:text-[#262626]">Jounal</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className='font-bold text-[20px]'>
              Shop
            </h3>
            <ul className=" gap-10 text-lg font-Dmsans text-[#767676]">
                          <Link to={"/"}>
                          <li className="hover:font-bold hover:text-[#262626]">catagory1</li>
                          </Link>
                          <Link to={"Shop"}>
                          <li className="hover:font-bold hover:text-[#262626]">catagory2</li>
                          </Link>
                          <Link to={"About"}>
                          <li className="hover:font-bold hover:text-[#262626]">catagory3</li>
                          </Link>
                          <Link to={"Contract"}>
                          <li className="hover:font-bold hover:text-[#262626]">catagory4</li>
                          </Link>
                          <Link to={"Jounal"}>
                          <li className="hover:font-bold hover:text-[#262626]">catagory5</li>
                          </Link>
                        </ul>
          </div>
          <div>
            <h3 className='font-bold text-[20px]'>
              Help
            </h3>
            <ul className="gap-10 text-lg font-Dmsans text-[#767676]">
                          <Link to={"/"}>
                          <li className="hover:font-bold hover:text-[#262626]">Privacy Policy</li>
                          </Link>
                          <Link to={"Shop"}>
                          <li className="hover:font-bold hover:text-[#262626]">Terms & Conditions</li>
                          </Link>
                          <Link to={"About"}>
                          <li className="hover:font-bold hover:text-[#262626]">Special E-shop</li>
                          </Link>
                          <Link to={"Contract"}>
                          <li className="hover:font-bold hover:text-[#262626]">Shipping</li>
                          </Link>
                          <Link to={"Jounal"}>
                          <li className="hover:font-bold hover:text-[#262626]">Secure Payments</li>
                          </Link>
                        </ul>
          </div>
          <div className=''>
            <h3 className='font-bold'>(052) 611-5711</h3>
            <h3 className='font-bold pb-5'>company@domain.com</h3>
            <h3>575 Crescent Ave. Quakertown, PA 18951</h3>
            </div>
            <div>
              <Image imgSrc={logo}/>
            </div>

        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Footer