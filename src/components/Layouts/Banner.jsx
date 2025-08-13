import React from 'react'
import { Link } from 'react-router-dom'
import Bannarone from '../../assets/Bannerone.png'
const Banner = () => {
  return (
    <Link to={"/shop"}>
    <div style={{ backgroundImage: `url(${Bannarone})`}} className="h-[500px] bg-no-repeat bg-center bg-cover"></div>
    </Link>
  )
}

export default Banner