
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function OnePlus() {


  function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  return (
    <div>

<div className="header">
      <div className="navbar">
          <div className="logo">
            <img className="nav-img" src="./img/navlogo2.png" alt="fail img to load net banking" />
            <p className='phone-shop shop2'>Phone Shop</p>
          </div>

          <div>
            <nav>
              <ul className='sidebar'>
                <li onClick={hideSidebar}> <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fc3746"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </a></li>
                <li><a href="/Home">Home</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/aboutUS">About</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="contact">Help</a></li>
              </ul>

              <ul>

                <li class="hideOnMobile"><a href="/Home">Home</a></li>
                <li class="hideOnMobile"><a href="/">Products</a></li>
                <li class="hideOnMobile"><a href="/aboutUS">About</a></li>
                <li class="hideOnMobile"><a href="/contact">Contact</a></li>
                <li class="hideOnMobile"><a href="contactUS">Help</a></li>
                <li class="menu-button" onClick={showSidebar}> <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26" fill='white'><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg></a></li>
              </ul>
            </nav>
          </div>

        </div>
      
      </div>










      <div className="company-name c2"> ONEPLUS </div>
      <div className="box">
        <div className="pro-1">
          <img src="./img/10T-1.png" alt="failto load img" />

          <h2 className='product-name name2'>ONEPLUS 10T</h2>
          <h2 className='price p2'>RS 12,000</h2>
          <button className='btn'> <a className='buy' href="/OnePlus-10T">BUY</a></button>
        </div>


        <div className="pro-1">
          <img src="./img/o11-2.png" alt="failto load img" />

          <h2 className='product-name'>ONEPLUS 11</h2>
          <h2 className='price'>RS 13,000</h2>
          <button className='btn'> <a className='buy' href="OnePlus-11">BUY</a></button>
        </div>
      </div>


      <div className="box">
        <div className="pro-1">
          <img src="./img/o11R-2.png" alt="failto load img" />

          <h2 className='product-name'>ONEPLUS 11R</h2>
          <h2 className='price'>RS 15,000</h2>
          <button className='btn'> <a className='buy' href="OnePlus-11R">BUY</a></button>
        </div>

        <div className="pro-1">
          <img src="./img/o12-1.png" alt="failto load img" />

          <h2 className='product-name'>ONEPLUS 12</h2>
          <h2 className='price'>RS 16,000</h2>
          <button className='btn'> <a className='buy' href="OnePlus-12">BUY</a></button>
        </div>
      </div>






      <div className="seprator"></div>

      <div className="footer">
        <div className="copyright">
          <p>Copyright © 2024 Phone Shop | Powered by Gadget Seller</p>
        </div>

        <ul className='footer-ul'>
          <li className='footer-li'>  <a href="/Home">HOME </a></li>
          <li className='footer-li'><a href="/">SHOP </a></li>
          <li className='footer-li'><a href="/aboutUS">ABOUT </a></li>
          <li className='footer-li'><a href="/contact">CONTACT</a></li>
        </ul>


      </div>
    </div>




  )
}

export default OnePlus
