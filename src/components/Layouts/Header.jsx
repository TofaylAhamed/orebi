import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image  from '../Image';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { FaUser, FaCaretDown, FaShoppingCart} from "react-icons/fa";

const Header = () => {
  return (
    <>
    <div className=" bg-blue-300 py-5">
      <Container>
        <Flex>
          <div className="">
            <Link to="/">
            <Image imgSrc={logo} imgAlt={logo}/>
            </Link>
          </div>
          <div className="m-auto">
            <ul className="flex gap-10 text-lg font-Dmsans text-[#767676]">
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
        </Flex>
      </Container>
    </div>
    <div className="bg-[#F5F5F3] py-4">
      <Container>
        <Flex className={"justify-between"}>
          <div className='flex items-center gap-x-2'>
            <HiBars3BottomLeft />
            <div>shop by catagory</div>
          </div>

          <div className='relative'>
            <input type="text" placeholder="search products" className='p-[15px] bg-white w-[550px] broder-none outline-none'/>
            <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2"/>
          </div>
          <div className="flex gap-x-5">
            <div className="flex gap-x-1">
              <FaUser />
            <FaCaretDown />
            </div>
            <FaShoppingCart />
          </div>
        </Flex>
      </Container>
    </div>
    </>
  )
}

export default Header