import React from 'react'
import Slider from '../components/Slider'
import FlashDeals from '../components/FlashDeals'
import Categories from '../components/Categories'
import Discounts from '../components/Discounts'
import MobilePhones from '../components/MobilePhones'
import Minimal from '../components/Minimal'
import Payment from '../components/Payment'

const HomePage = () => {
  return (
    <div>
      <Slider/>
      <FlashDeals/>
      <Categories/>
      <Discounts/>
      <MobilePhones/>
      <Minimal/>
      <Payment/>
      
    </div>
  )
}

export default HomePage
