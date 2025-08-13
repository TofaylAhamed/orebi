import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <Link to={"/shop"}>
    <div className="bg-[url(src/assets/Bannerone.png)] h-[500px] bg-no-repeat bg-center bg-cover"></div>
    </Link>
  )
}

export default Banner