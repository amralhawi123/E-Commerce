import React from 'react'
import cat1 from './../images/category/cat-1.png'
import cat2 from './../images/category/cat-2.png'
import { Card } from 'react-bootstrap';
import SHOP1 from "./../images/shops/shops-1.png"
import SHOP2 from "./../images/shops/shops-2.png"
import SHOP3 from "./../images/shops/shops-3.png"
import SHOP4 from "./../images/shops/shops-4.png"
import SHOP5 from "./../images/shops/shops-5.png"
import SHOP6 from "./../images/shops/shops-6.png"
import SHOP7 from "./../images/shops/shops-7.png"
import SHOP8 from "./../images/shops/shops-8.png"
import SHOP9 from "./../images/shops/shops-9.png"


const MobilePhones = () => {
  return (
    <div className='mobilePhone'>
      <div className='container'>
         <div className='row '>
            <div className='col-md-3 box1 col-sm-12'>
               <div className='brand'>
                  <h2>Brands</h2>
                  <h2>Shops</h2>
               </div>
               <div className='shope'>
                  <img src={cat1} alt="brand"/>
                  <h3>Apple</h3>
               </div>
               <div className='shope'>
                  <img src={cat2} alt="brand"/>
                  <h3>Samasung</h3>
               </div>
               <div className='shope'>
                  <img src={cat1} alt="brand"/>
                  <h3>oppo</h3>
               </div>
               <div className='shope'>
                  <img src={cat2} alt="brand"/>
                  <h3>vivo</h3>
               </div>
               <div className='shope'>
                  <img src={cat1} alt="brand"/>
                  <h3>Redimi</h3>
               </div>
               <div className='shope'>
                  <img src={cat2} alt="brand"/>
                  <h3>Sony</h3>
               </div>
               <div className='shope bt'>
               <button>View All Barands</button>
               </div>
            </div>
            <div className='col-md-9 box2 col-sm-12'>
            <div className='info'>
            <div>
            <h2>Mobile Phones</h2>
            </div>
            <div class="heading-right">
               <span>View all</span>
               <i class="fa fa-caret-right"></i>
               </div>
         </div>
         <div className='row'>
         <div className='col-md-4 col-sm-4 box'>
         <Card >
        <span className='discount'>25% off</span>
        <div class="product-like">
          <label>0</label>
        <i class="fa fa-heart"></i></div>
    <Card.Img variant="top" src={SHOP1} />
    <Card.Body>
      <Card.Title>Mapple Earphones</Card.Title>
      <div className='rate'>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      </div>
      <div className='plus'>
        <span>$180.00</span>
        <button><i class="fa fa-plus"></i></button>
      </div>
    </Card.Body>
    </Card>
         </div>
         <div className='col-md-4 col-sm-4 box'>
         <Card >
        <span className='discount'>10% off</span>
        <div class="product-like">
          <label>0</label>
        <i class="fa fa-heart"></i></div>
    <Card.Img variant="top" src={SHOP2} />
    <Card.Body>
      <Card.Title>Vivo android one</Card.Title>
      <div className='rate'>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      </div>
      <div className='plus'>
        <span>$120.00</span>
        <button><i class="fa fa-plus"></i></button>
      </div>
    </Card.Body>
    </Card>
         </div>
         <div className='col-md-4 col-sm-4 box'>
         <Card >
        <span className='discount'>50% off</span>
        <div class="product-like">
          <label>0</label>
        <i class="fa fa-heart"></i></div>
    <Card.Img variant="top" src={SHOP3} />
    <Card.Body>
      <Card.Title>Sony Lights</Card.Title>
      <div className='rate'>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      </div>
      <div className='plus'>
        <span>$100.00</span>
        <button><i class="fa fa-plus"></i></button>
      </div>
    </Card.Body>
    </Card>
         </div>
         <div className='col-md-4 col-sm-4 box'>
         <Card >
        <span className='discount'>10% off</span>
        <div class="product-like">
          <label>0</label>
        <i class="fa fa-heart"></i></div>
    <Card.Img variant="top" src={SHOP4} />
    <Card.Body>
      <Card.Title>Iphone</Card.Title>
      <div className='rate'>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      </div>
      <div className='plus'>
        <span>$999.00</span>
        <button><i class="fa fa-plus"></i></button>
      </div>
    </Card.Body>
    </Card>
         </div>
         <div className='col-md-4 col-sm-4 box'>
         <Card >
        <span className='discount'>20% off</span>
        <div class="product-like">
          <label>0</label>
        <i class="fa fa-heart"></i></div>
    <Card.Img variant="top" src={SHOP5} />
    <Card.Body>
      <Card.Title>Ceats wireless earphone</Card.Title>
      <div className='rate'>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      </div>
      <div className='plus'>
        <span>$80.00</span>
        <button><i class="fa fa-plus"></i></button>
      </div>
    </Card.Body>
    </Card>
         </div>
         <div className='col-md-4 col-sm-4 box'>
         <Card >
        <span className='discount'>20% off</span>
        <div class="product-like">
          <label>0</label>
        <i class="fa fa-heart"></i></div>
    <Card.Img variant="top" src={SHOP6} />
    <Card.Body>
      <Card.Title>Redimi Phone</Card.Title>
      <div className='rate'>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      </div>
      <div className='plus'>
        <span>$400.00</span>
        <button><i class="fa fa-plus"></i></button>
      </div>
    </Card.Body>
    </Card>
         </div>
         <div className='col-md-4 col-sm-4 box'>
         <Card >
        <span className='discount'>5% off</span>
        <div class="product-like">
          <label>0</label>
        <i class="fa fa-heart"></i></div>
    <Card.Img variant="top" src={SHOP7} />
    <Card.Body>
      <Card.Title>Xeats Bluetooth earphones</Card.Title>
      <div className='rate'>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      </div>
      <div className='plus'>
        <span>$60.00</span>
        <button><i class="fa fa-plus"></i></button>
      </div>
    </Card.Body>
    </Card>
         </div>
         <div className='col-md-4 col-sm-4 box'>
         <Card >
        <span className='discount'>10% off</span>
        <div class="product-like">
          <label>0</label>
        <i class="fa fa-heart"></i></div>
    <Card.Img variant="top" src={SHOP8} />
    <Card.Body>
      <Card.Title>Airpod</Card.Title>
      <div className='rate'>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      </div>
      <div className='plus'>
        <span>$120.00</span>
        <button><i class="fa fa-plus"></i></button>
      </div>
    </Card.Body>
    </Card>
         </div>
         <div className='col-md-4 col-sm-4 box'>
         <Card >
        <span className='discount'>2% off</span>
        <div class="product-like">
          <label>0</label>
        <i class="fa fa-heart"></i></div>
    <Card.Img variant="top" src={SHOP9} />
    <Card.Body>
      <Card.Title>Silver Cap</Card.Title>
      <div className='rate'>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      <i class="fa fa-star"></i>
      </div>
      <div className='plus'>
        <span>$5.00</span>
        <button><i class="fa fa-plus"></i></button>
      </div>
    </Card.Body>
    </Card>
         </div>
         </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default MobilePhones
