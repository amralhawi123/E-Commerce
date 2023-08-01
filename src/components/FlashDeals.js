import React,{useState} from 'react';
import { Card } from 'react-bootstrap';

import flash1 from "./../images/flash/flash-1.png"
import flash2 from './../images/flash/flash-2.png';
import flash3 from './../images/flash/flash-3.png';
import flash4 from './../images/flash/flash-4.png';
import flash5 from './../images/flash/flash-5.png';

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FlashDeals = () => {

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
            <div id='card1'>
            <Card >
              <span className='discount'>50% off</span>
              <div class="product-like">
                <label>{count}</label>
              <i class="fa fa-heart" onClick={increment}></i></div>
          <Card.Img variant="top" src={flash1} />
          <Card.Body>
            <Card.Title>Shoes</Card.Title>
            <div className='rate'>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div className='plus'>
              <span>$200.00</span>
              <button ><i class="fa fa-plus"></i></button>
            </div>
          </Card.Body>
          </Card>
            </div>
            <div>
            <Card >
              <span className='discount'>50% off</span>
              <div class="product-like">
                <label>0</label>
              <i class="fa fa-heart"></i></div>
          <Card.Img variant="top" src={flash2} />
          <Card.Body>
            <Card.Title>Watch</Card.Title>
            <div className='rate'>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div className='plus'>
              <span>$200.00</span>
              <button><i class="fa fa-plus"></i></button>
            </div>
          </Card.Body>
          </Card>
            </div>
            <div>
            <Card >
              <span className='discount'>50% off</span>
              <div class="product-like">
                <label>0</label>
              <i class="fa fa-heart"></i></div>
          <Card.Img variant="top" src={flash3} />
          <Card.Body>
            <Card.Title>Smart Mobile Black</Card.Title>
            <div className='rate'>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div className='plus'>
              <span>$200.00</span>
              <button><i class="fa fa-plus"></i></button>
            </div>
          </Card.Body>
          </Card>
            </div>
            <div>
            <Card >
              <span className='discount'>50% off</span>
              <div class="product-like">
                <label>0</label>
              <i class="fa fa-heart"></i></div>
          <Card.Img variant="top" src={flash4} />
          <Card.Body>
            <Card.Title>Smart Watch Black</Card.Title>
            <div className='rate'>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div className='plus'>
              <span>$200.00</span>
              <button><i class="fa fa-plus"></i></button>
            </div>
          </Card.Body>
          </Card>
            </div>
            <div>
            <Card >
              <span className='discount'>50% off</span>
              <div class="product-like">
                <label>0</label>
              <i class="fa fa-heart"></i></div>
          <Card.Img variant="top" src={flash5} />
          <Card.Body>
            <Card.Title>Sunglass</Card.Title>
            <div className='rate'>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div className='plus'>
              <span>$200.00</span>
              <button><i class="fa fa-plus"></i></button>
            </div>
          </Card.Body>
          </Card>
            </div>
            <div>
            <Card >
              <span className='discount'>50% off</span>
              <div class="product-like">
                <label>0</label>
              <i class="fa fa-heart"></i></div>
          <Card.Img variant="top" src={flash1} />
          <Card.Body>
            <Card.Title>Shoes</Card.Title>
            <div className='rate'>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div className='plus'>
              <span>$200.00</span>
              <button><i class="fa fa-plus"></i></button>
            </div>
          </Card.Body>
          </Card>
            </div>
            <div>
            <Card >
              <span className='discount'>50% off</span>
              <div class="product-like">
                <label>0</label>
              <i class="fa fa-heart"></i></div>
          <Card.Img variant="top" src={flash2} />
          <Card.Body>
            <Card.Title>Watch</Card.Title>
            <div className='rate'>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div className='plus'>
              <span>$200.00</span>
              <button><i class="fa fa-plus"></i></button>
            </div>
          </Card.Body>
          </Card>
            </div>
            <div>
            <Card >
              <span className='discount'>50% off</span>
              <div class="product-like">
                <label>0</label>
              <i class="fa fa-heart"></i></div>
          <Card.Img variant="top" src={flash3} />
          <Card.Body>
            <Card.Title>Smart Mobile Black</Card.Title>
            <div className='rate'>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div className='plus'>
              <span>$200.00</span>
              <button><i class="fa fa-plus"></i></button>
            </div>
          </Card.Body>
          </Card>
            </div>
            <div>
            <Card >
              <span className='discount'>50% off</span>
              <div class="product-like">
                <label>0</label>
              <i class="fa fa-heart"></i></div>
          <Card.Img variant="top" src={flash4} />
          <Card.Body>
            <Card.Title>Smart Watch Black</Card.Title>
            <div className='rate'>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div className='plus'>
              <span>$200.00</span>
              <button><i class="fa fa-plus"></i></button>
            </div>
          </Card.Body>
          </Card>
            </div>
            <div>
            <Card >
              <span className='discount'>50% off</span>
              <div class="product-like">
                <label>0</label>
              <i class="fa fa-heart"></i></div>
          <Card.Img variant="top" src={flash5} />
          <Card.Body>
            <Card.Title>Sunglass</Card.Title>
            <div className='rate'>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            </div>
            <div className='plus'>
              <span>$200.00</span>
              <button><i class="fa fa-plus"></i></button>
            </div>
          </Card.Body>
          </Card>
            </div>
    </Slider>
          </div>
      </div>
    </div>
  )
}

export default FlashDeals
