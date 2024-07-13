
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function Shop() {
  return (
    <div>

      <div className="header shop-img">
        <div className="navbar">
          <div className="logo">
            <img className="nav-img" src="./img/navlogo2.png" alt="fail img to load net banking" />
            <p className='phone-shop'>Phone Shop</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fc3746"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        </div>
        <h3 className='heading-1'>Buy your dream phone</h3>

        <h1 className='heading-2 shop'><span className='white-txt'>SHOP</span>

        </h1>

      </div>





      <div className="company-name "> IPHONE </div>
      <div className="box">
        <div className="pro-1">
          <img src="./img/i11-1.jpg" alt="failto load img" />

          <h2 className='product-name name2'>IPHONE 11</h2>
          <h2 className='price p2'>RS 12,000</h2>
          <button> <a className='buy' href="/Iphone11">BUY</a></button>
        </div>


        <div className="pro-1">
          <img src="./img/i12-3.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 12</h2>
          <h2 className='price'>RS 13,000</h2>
          <button> <a className='buy' href="Iphone12">BUY</a></button>
        </div>
      </div>






      <div className="box">
        <div className="pro-1">
          <img src="./img/i13-1.jpg" alt="failto load img" />

          <h2 className='product-name'>IPHONE 13</h2>
          <h2 className='price'>RS 14,000</h2>
          <button> <a className='buy' href="Iphone13">BUY</a></button>
        </div>


        <div className="pro-1">
          <img src="./img/i14-1.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 14</h2>
          <h2 className='price'>RS 16,000</h2>
          <button> <a className='buy' href="Iphone14">BUY</a></button>
        </div>



      </div>





      <div className="box">



        <div className="pro-1">
          <img src="./img/i15-1.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 15</h2>
          <h2 className='price'>RS 18,000</h2>
          <button> <a className='buy' href="Iphone15">BUY</a></button>
        </div>

        <div className="pro-1">
          <img src="./img/i13-2.jpg" alt="failto load img" />

          <h2 className='product-name'>IPHONE 13 MINI</h2>
          <h2 className='price'>RS 12,000</h2>
          <button> <a className='buy' href="Iphone13-mini">BUY</a></button>
        </div>
      </div>



      <div className="box">



        <div className="pro-1">
          <img src="./img/i12-1.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 12 mini</h2>
          <h2 className='price'>RS 12,000</h2>
          <button> <a className='buy' href='Iphone12-mini'>BUY</a></button>
        </div>

        <div className="pro-1">
          <img src="./img/i14-2.jpg" alt="failto load img" />

          <h2 className='product-name'>IPHONE 14 PLUS</h2>
          <h2 className='price'>RS 18,000</h2>
          <button> <a className='buy' href="Iphone14-plus">BUY</a></button>
        </div>
      </div>




      <div className="box">
<div className="pro-1">
  <img src="./img/i15-3.png" alt="failto load img" />

  <h2 className='product-name'>IPHONE 15 PLUS</h2>
  <h2 className='price'>RS 20,000</h2>
  <button> <a className='buy' href="Iphone15-plus">BUY</a></button>
</div>

<div className="pro-1">
  <img src="./img/i13-pro-2.jpg" alt="failto load img" />

  <h2 className='product-name'>IPHONE 13 PRO</h2>
  <h2 className='price'>RS 16,000</h2>
  <button> <a className='buy' href="Iphone13-pro">BUY</a></button>
</div>
</div>


<div className="box">
<div className="pro-1">
  <img src="./img/i14-pro-3.png" alt="failto load img" />

  <h2 className='product-name'>IPHONE 14 PRO</h2>
  <h2 className='price'>RS 20,000</h2>
  <button> <a className='buy' href="Iphone14-pro">BUY</a></button>
</div>

<div className="pro-1">
  <img src="./img/i15-pro-2.png" alt="failto load img" />

  <h2 className='product-name'>IPHONE 15 PRO</h2>
  <h2 className='price'>RS 22,000</h2>
  <button> <a className='buy' href="Iphone15-pro">BUY</a></button>
</div>
</div>


<div className="box">
<div className="pro-1">
  <img src="./img/i14-pro-2.jpg" alt="failto load img" />

  <h2 className='product-name'>IPHONE 14 PRO MAX</h2>
  <h2 className='price'>RS 22,000</h2>
  <button> <a className='buy' href="Iphone14-pro-max">BUY</a></button>
</div>

<div className="pro-1">
  <img src="./img/i15-pro-1.png" alt="failto load img" />

  <h2 className='product-name'>IPHONE 15 PRO MAX</h2>
  <h2 className='price'>RS 25,000</h2>
  <button> <a className='buy' href="Iphone15-pro-max">BUY</a></button>
</div>
</div>



      <div className="company-name c2"> SAMSUNG GALAXY </div>
      <div className="box">
        <div className="pro-1">
          <img src="./img/s23-ultra-1.png" alt="failto load img" />

          <h2 className='product-name name2'>SAMSUNG GALAXY S23 ULTRA</h2>
          <h2 className='price p2'>RS 20,000</h2>
          <button> <a className='buy' href="/Samsung-Galaxy-S23-ULTRA">BUY</a></button>
        </div>


        <div className="pro-1">
          <img src="./img/s23-plus-1.png" alt="failto load img" />

          <h2 className='product-name name2'>SAMSUNG GALAXY S23 PLUS</h2>
          <h2 className='price p2'>RS 18,000</h2>
          <button> <a className='buy' href="/Samsung-Galaxy-S23-Plus">BUY</a></button>
        </div>
      </div>



      <div className="box">
        <div className="pro-1">
          <img src="./img/zflip-1.png" alt="failto load img" />

          <h2 className='product-name name2'>SAMSUNG GALAXY ZFLIP</h2>
          <h2 className='price p2'>RS 15,000</h2>
          <button> <a className='buy' href="/Samsung-Galaxy-zflip">BUY</a></button>
        </div>


        <div className="pro-1">
          <img src="./img/zfold-1.png" alt="failto load img" />

          <h2 className='product-name name2'>SAMSUNG GALAXY ZFOLD 4</h2>
          <h2 className='price p2'>RS 16,000</h2>
          <button> <a className='buy' href="/Samsung-Galaxy-zfold">BUY</a></button>
        </div>

      </div>




      <div className="company-name c2"> ONEPLUS </div>
      <div className="box">
        <div className="pro-1">
          <img src="./img/10T-1.png" alt="failto load img" />

          <h2 className='product-name name2'>ONEPLUS 10T</h2>
          <h2 className='price p2'>RS 12,000</h2>
          <button> <a className='buy' href="/OnePlus-10T">BUY</a></button>
        </div>


        <div className="pro-1">
          <img src="./img/o11-2.png" alt="failto load img" />

          <h2 className='product-name'>ONEPLUS 11</h2>
          <h2 className='price'>RS 13,000</h2>
          <button> <a className='buy' href="OnePlus-11">BUY</a></button>
        </div>
      </div>


      <div className="box">
        <div className="pro-1">
          <img src="./img/o11R-2.png" alt="failto load img" />

          <h2 className='product-name'>ONEPLUS 11R</h2>
          <h2 className='price'>RS 15,000</h2>
          <button> <a className='buy' href="OnePlus-11R">BUY</a></button>
        </div>

        <div className="pro-1">
          <img src="./img/o12-1.png" alt="failto load img" />

          <h2 className='product-name'>ONEPLUS 12</h2>
          <h2 className='price'>RS 16,000</h2>
          <button> <a className='buy' href="OnePlus-12">BUY</a></button>
        </div>
      </div>





      <div className="company-name c2"> NOTHING PHONE </div>
      <div className="box">
        <div className="pro-1">
          <img src="./img/n1-1.jpg" alt="failto load img" />

          <h2 className='product-name name2'>NOTHING PHONE 1</h2>
          <h2 className='price p2'>RS 9,000</h2>
          <button> <a className='buy' href="/Nothing-1">BUY</a></button>
        </div>


        <div className="pro-1">
          <img src="./img/n2-1.png" alt="failto load img" />

          <h2 className='product-name name2'>NOTHING PHONE 2</h2>
          <h2 className='price p2'>RS 10,000</h2>
          <button> <a className='buy' href="/Nothing-2">BUY</a></button>
        </div>
      </div>



      <div className="box">


<div className="pro-1">
  <img src="./img/i13-pro-4.jpg" alt="failto load img" />

  <h2 className='product-name'>IPHONE 13 PRO MAX</h2>
  <h2 className='price'>RS 18,000</h2>
  <button> <a className='buy' href="Iphone13-pro-max">BUY</a></button>
</div>
</div>

      <div className="seprator"></div>

      <div className="footer">
        <div className="copyright">
          <p>Copyright © 2024 Phone Shop | Powered by Gadget Seller</p>
        </div>

        <ul className='footer-ul'>
          <li className='footer-li'>  <a href="/">HOME </a></li>
          <li className='footer-li'><a href="/shop">SHOP </a></li>
          <li className='footer-li'><a href="/aboutUS">ABOUT </a></li>
          <li className='footer-li'><a href="/contact">CONTACT</a></li>
        </ul>


      </div>
    </div>




  )
}

export default Shop
