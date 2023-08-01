import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slid1 from "./../images/SlideCard/slide-1.png"
import slid2 from "./../images/SlideCard/slide-2.png"
import slid3 from "./../images/SlideCard/slide-3.png"
import slid4 from "./../images/SlideCard/slide-4.png"
import { Button } from 'react-bootstrap';

const Slider = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };



  return (
    <div className='slider'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2 box col-sm-12'>
              <h2>
                Fashion</h2>
                              <h2>
                Electronic</h2>
                              <h2>
                Cars</h2>
                              <h2>
                Home & Garden</h2>
                              <h2>
                Gifts</h2>
                              <h2>
                Health & Beauty</h2>
                              <h2>
                Pets</h2>
                              <h2>
                Baby Toys</h2>
                              <h2>
                Groceries</h2>
          </div>
          <div className='col-md-9 slid col-sm-12'>
          <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img alt="First slide" src={slid1} />
        <Carousel.Caption>
          <h3>50% Off For Your First Shopping</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
        <Button className="btn">Visit Collections</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img alt="First slide" src={slid2} />
        <Carousel.Caption>
          <h3>50% Off For Your First Shopping</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
        <Button className="btn">Visit Collections</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img alt="First slide" src={slid3} />
        <Carousel.Caption>
          <h3>50% Off For Your First Shopping</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
          </p>
        <Button className="btn">Visit Collections</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img alt="First slide" src={slid4} />
        <Carousel.Caption>
          <h3>50% Off For Your First Shopping</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
          </p>
        <Button className="btn">Visit Collections</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
