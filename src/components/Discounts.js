import React from 'react';
import { Card } from 'react-bootstrap';
import dis1 from "./../images/discount/discount-1.png"
import dis2 from "./../images/discount/discount-2.png"
import dis3 from "./../images/discount/discount-3.png"
import dis4 from "./../images/discount/discount-4.png"
import dis5 from "./../images/discount/discount-5.png"
import dis6 from "./../images/discount/discount-6.png"
import dis7 from "./../images/discount/discount-7.png"
import dis8 from "./../images/discount/discount-8.png"
import dis9 from "./../images/discount/discount-9.png"

import gift from "./../images/gift.png"

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discounts = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
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
    <div className='discounts'>
      <div className='container'>
      <div className='info'>
            <div>
            <img src={gift} alt='gift'/>
            <h2>Big Discounts</h2>
            </div>
            <div class="heading-right">
               <span>View all</span>
               <i class="fa fa-caret-right"></i>
               </div>
         </div>
          <div className='box'>
  <Slider {...settings}>
      <div >
      <Card >
    <Card.Img variant="top" src={dis1} />
    <Card.Body>
      <Card.Title>BenuX 2022</Card.Title>
      <Card.Text>$250</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis2} />
    <Card.Body>
      <Card.Title>Sony TV 1080p</Card.Title>
      <Card.Text>$450</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis3} />
    <Card.Body>
      <Card.Title>Sony PS4</Card.Title>
      <Card.Text>$50</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis4} />
    <Card.Body>
      <Card.Title>Setgearr 2022</Card.Title>
      <Card.Text>$100</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis5} />
    <Card.Body>
      <Card.Title>Tony BGB</Card.Title>
      <Card.Text>$250</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis6} />
    <Card.Body>
      <Card.Title>RG products</Card.Title>
      <Card.Text>$200</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis7} />
    <Card.Body>
      <Card.Title>Ranasonic 2022</Card.Title>
      <Card.Text>$300</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis8} />
    <Card.Body>
      <Card.Title>Pune HD</Card.Title>
      <Card.Text>$30</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis9} />
    <Card.Body>
      <Card.Title>Sony CCTV</Card.Title>
      <Card.Text>$80</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis1} />
    <Card.Body>
      <Card.Title>BenuX 2022</Card.Title>
      <Card.Text>$250</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis2} />
    <Card.Body>
      <Card.Title>Sony TV 1080p</Card.Title>
      <Card.Text>$450</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis3} />
    <Card.Body>
      <Card.Title>Sony PS4</Card.Title>
      <Card.Text>$50</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis4} />
    <Card.Body>
      <Card.Title>Setgearr 2022</Card.Title>
      <Card.Text>$100</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis5} />
    <Card.Body>
      <Card.Title>Tony BGB</Card.Title>
      <Card.Text>$250</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis6} />
    <Card.Body>
      <Card.Title>RG products</Card.Title>
      <Card.Text>$200</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis7} />
    <Card.Body>
      <Card.Title>Ranasonic 2022</Card.Title>
      <Card.Text>$300</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis8} />
    <Card.Body>
      <Card.Title>Pune HD</Card.Title>
      <Card.Text>$30</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis9} />
    <Card.Body>
      <Card.Title>Sony CCTV</Card.Title>
      <Card.Text>$80</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis1} />
    <Card.Body>
      <Card.Title>BenuX 2022</Card.Title>
      <Card.Text>$250</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis2} />
    <Card.Body>
      <Card.Title>Sony TV 1080p</Card.Title>
      <Card.Text>$450</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis3} />
    <Card.Body>
      <Card.Title>Sony PS4</Card.Title>
      <Card.Text>$50</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis4} />
    <Card.Body>
      <Card.Title>Setgearr 2022</Card.Title>
      <Card.Text>$100</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis5} />
    <Card.Body>
      <Card.Title>Tony BGB</Card.Title>
      <Card.Text>$250</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis6} />
    <Card.Body>
      <Card.Title>RG products</Card.Title>
      <Card.Text>$200</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis7} />
    <Card.Body>
      <Card.Title>Ranasonic 2022</Card.Title>
      <Card.Text>$300</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis8} />
    <Card.Body>
      <Card.Title>Pune HD</Card.Title>
      <Card.Text>$30</Card.Text>
    </Card.Body>
    </Card>
      </div>
      <div >
      <Card >
    <Card.Img variant="top" src={dis9} />
    <Card.Body>
      <Card.Title>Sony CCTV</Card.Title>
      <Card.Text>$80</Card.Text>
    </Card.Body>
    </Card>
      </div>
    </Slider>
          </div>
      </div>
    </div>
  )
}

export default Discounts
