import React,{useState} from 'react';
import { Card } from 'react-bootstrap';
import storeItem from '../data/storeItem.json'

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formatCurancy from './formateCurrancy';
import { useShoppingcart } from '../context/shoppingCartContext';

const FlashDeals = () => {

  const {increasCartQuantity} = useShoppingcart()

  const [count, setCount] = useState(0)
  const increment =() => {
    setCount(count + 1)
  }
  
 
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
    <div className='flash'>
      <div className='container'>
         <div className='info'>
         <i class="fa fa-bolt"></i>
            <h2>Flash Deals</h2>
         </div>
          <div className='box'>
  <Slider {...settings}>
      {
        storeItem.map((item)=> (
          <div key={item.id}>
          <Card >
            <span className='discount'>{item.discount}% off</span>
            <div class="product-like">
              <label>{count}</label>
            <i class="fa fa-heart" onClick={increment}></i></div>
        <Card.Img variant="top" src={item.imageUrl} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <div className='rate'>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          </div>
          <div className='plus'>
            <span>{formatCurancy(item.price)}</span>
            <button onClick={()=> increasCartQuantity(item.id)}><i class="fa fa-plus"></i></button>
          </div>
        </Card.Body>
        </Card>
          </div>

        ))
      }
    </Slider>
          </div>
      </div>
    </div>
  )
}

export default FlashDeals
