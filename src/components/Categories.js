import React from 'react';

import cat1 from "./../images/top/category-1.png"
import cat2 from "./../images/top/category-2.png"
import cat3 from "./../images/top/category-3.png"


import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='category'>
      <div className='container'>
         <div className='info'>
            <div>
            <i class="fa fa-star"></i>
            <h2>Top Categories</h2>
            </div>
            <div class="heading-right">
               <span>View all</span>
               <i class="fa fa-caret-right"></i>
               </div>
         </div>
          <div className='box'>
  <Slider {...settings}>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">headphone</span>
         <span class="tright">3k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat1} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">Watch</span>
         <span class="tright">4k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat2} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">sunglass</span>
         <span class="tright">6k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat3} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">Watch</span>
         <span class="tright">4k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat2} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">headphone</span>
         <span class="tright">3k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat1} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">sunglass</span>
         <span class="tright">6k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat3} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">Watch</span>
         <span class="tright">4k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat2} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">headphone</span>
         <span class="tright">3k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat1} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">sunglass</span>
         <span class="tright">6k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat3} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">Watch</span>
         <span class="tright">4k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat2} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">headphone</span>
         <span class="tright">3k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat1} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">headphone</span>
         <span class="tright">3k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat1} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">Watch</span>
         <span class="tright">4k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat2} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">sunglass</span>
         <span class="tright">6k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat3} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">Watch</span>
         <span class="tright">4k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat2} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">headphone</span>
         <span class="tright">3k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat1} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">sunglass</span>
         <span class="tright">6k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat3} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">Watch</span>
         <span class="tright">4k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat2} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">headphone</span>
         <span class="tright">3k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat1} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">sunglass</span>
         <span class="tright">6k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat3} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">Watch</span>
         <span class="tright">4k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat2} alt='category'/>
         </div>
      </div>
      <div className='content'>
      <div class="nametop d_flex">
         <span class="tleft">headphone</span>
         <span class="tright">3k orders this week</span>
         </div>
         <div className='img'>
            <img src={cat1} alt='category'/>
         </div>
      </div>
    </Slider>
          </div>
      </div>
    </div>
  )
  }
export default Categories
