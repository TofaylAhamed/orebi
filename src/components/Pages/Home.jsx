import React from 'react';
import Header from '../Layouts/Header';
import Banner from '../Layouts/Banner';
import Terms from '../Layouts/Terms';
import Sales from '../Layouts/Sales';
import NewArrival from './Layouts/NewArrival';
import Ourbestseller from '../Layouts/Ourbestseller';
import BannerTwo from '../Layouts/BannerTwo';
import SpecialOffers from '../Layouts/SpecialOffers';


const Home = () => {
  return (
    <>
    <Banner/>
    <Terms/>
    <Sales/>
    <NewArrival/>
    <Ourbestseller/>
    <BannerTwo/>
    <SpecialOffers/>
    </>
  )
}

export default Home