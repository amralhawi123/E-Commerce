import React from 'react'
import logo from "../../images/logo.6172109437bb6cb48eb8dc1f65c9964c.svg"
import { Link } from 'react-router-dom'

function Head (){

  return (
    <section className='search' >
      <div className='container' >
         <div className='row'>
         <div className='logo col-md-2 col-sm-6'>
            <img src={logo} alt='logo' title='logo'/>
         </div>
         <div className='sear col-md-8 col-sm-8'>
            <form>
            <i class="fa fa-search"></i>
            <input type='search' placeholder='Search and hit enter'/>
            <button className='btn'>All Category</button>
            </form>
         </div>
         <div className='icons col-md-2 col-sm-6'>
            <i class="fa fa-user icon-circle"></i>
            <div class="cart">
               <Link to="/cart"><i class="fa fa-shopping-bag icon-circle"></i></Link>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default Head
