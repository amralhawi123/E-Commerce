import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Payment = () => {
  return (
    <div className='payment'>
      <Container>
         <Row>
            <Col className='md-3 sm-12 box'>
            <div class="img">
            <i class="fa fa-id-card"></i>
               </div>
            <h2>Safe Payment</h2>
            <p>We offer competitive prices on our 100 million plus product any range.</p>
            </Col>
            <Col className='md-3 sm-12 box'>
            <div class="img">
               <i class="fa fa-truck"></i>
               </div>
            <h2>Worldwide Delivery</h2>
            <p>We offer competitive prices on our 100 million plus product any range.</p>
            </Col>
            <Col className='md-3 sm-12 box'>
            <div class="img">
            <i class="fa fa-shield"></i>
               </div>
            <h2>Shop With Confidence</h2>
            <p>We offer competitive prices on our 100 million plus product any range.</p>
            </Col>
            <Col className='md-3 sm-12 box'>
            <div class="img">
            <i class="fa fa-star"></i>
               </div>
            <h2>24/7 Support</h2>
            <p>We offer competitive prices on our 100 million plus product any range.</p>
            </Col>
         </Row>
      </Container>
    </div>
  )
}

export default Payment
