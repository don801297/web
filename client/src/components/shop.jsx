
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function Shop() {


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





      <div className="company-name ">Apple IPHONE </div>
      <div className="box">
        <div className="pro-1">
          <img src="./img/i11-1.jpg" alt="failto load img" />

          <h2 className='product-name name2'>IPHONE 11</h2>
          <h2 className='price p2'>RS 12,000</h2>
          
          <div className="btn-box"><a href="Iphone11">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>


        <div className="pro-1">
          <img src="./img/i12-3.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 12</h2>
          <h2 className='price'>RS 13,000</h2>
                              <div className="btn-box"><a href="Iphone12">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>
      </div>






      <div className="box">



      <div className="pro-1">
          <img src="./img/watch4-1.webp" alt="failto load img" />

          <h2 className='product-name'>Rps Digital Watch</h2>
          <h2 className='price'>RS 120</h2>
          
         <div className="btn-box"><a href="RPS-watch">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>


        <div className="pro-1">
          <img src="./img/earphone1.jpg" alt="failto load img" />

          <h2 className='product-name zebronic-ear'>Zebronic Earphone</h2>
          <h2 className='price'>RS 140 </h2>
                 <div className="btn-box"><a href="earphone">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>



      </div>





      <div className="box">



        <div className="pro-1">
          <img src="./img/i15-1.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 15</h2>
          <h2 className='price'>RS 18,000</h2>
         <div className="btn-box"><a href="Iphone15">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>

        <div className="pro-1">
          <img src="./img/i13-2.jpg" alt="failto load img" />

          <h2 className='product-name'>IPHONE 13 MINI</h2>
          <h2 className='price'>RS 12,000</h2>
          
          <div className="btn-box"><a href="Iphone13-mini">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>
      </div>



      <div className="box">



        <div className="pro-1">
          <img src="./img/i12-1.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 12 mini</h2>
          <h2 className='price'>RS 12,000</h2>
          
          <div className="btn-box"><a href="Iphone12-mini">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>



        <div className="pro-1">
          <img src="./img/i15-3.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 15 PLUS</h2>
          <h2 className='price'>RS 20,000</h2>
          
          <div className="btn-box"><a href="Iphone15-plus">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>

       
      </div>




      <div className="box">
      <div className="pro-1">
          <img src="./img/data-cable1-3.webp" alt="failto load img" />

          <h2 className='product-name ptron-cable'>pTron USB Type-C cable</h2>
          <h2 className='price'>RS 130</h2>
          
           <div className="btn-box"><a href="Ptron-datacable">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>


       


        <div className="pro-1">
          <img src="./img/watch3-1.webp" alt="failto load img" />

          <h2 className='product-name'>Sunway Digital Watch</h2>
          <h2 className='price'>RS 130</h2>
                <div className="btn-box"><a href="Sunway-watch">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>


      </div>


      <div className="box">
        <div className="pro-1">
          <img src="./img/i14-pro-3.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 14 PRO</h2>
          <h2 className='price'>RS 20,000</h2>
          
          <div className="btn-box"><a href="Iphone14-pro">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>

        <div className="pro-1">
          <img src="./img/i15-pro-2.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 15 PRO</h2>
          <h2 className='price'>RS 22,000</h2>
          
          <div className="btn-box"><a href="Iphone15-pro">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>
      </div>


      <div className="box">
      <div className="pro-1">
          <img src="./img/watch4-1.webp" alt="failto load img" />

          <h2 className='product-name'>Rps Digital Watch</h2>
          <h2 className='price'>RS 120</h2>
         <div className="btn-box"><a href="RPS-watch">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>

        <div className="pro-1">
          <img src="./img/i15-pro-1.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 15 PRO MAX</h2>
          <h2 className='price'>RS 18,000</h2>
    <div className="btn-box"><a href="Iphone15-pro-max">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>
      </div>



      <div className="company-name c2"> SAMSUNG GALAXY </div>
      <div className="box">
        <div className="pro-1">
          <img src="./img/s23-ultra-1.png" alt="failto load img" />

          <h2 className='product-name name2'>SAMSUNG GALAXY S23 ULTRA</h2>
          <h2 className='price p2'>RS 20,000</h2>
          
          <div className="btn-box"><a href="Samsung-Galaxy-S23-ULTRA">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>


        <div className="pro-1">
          <img src="./img/s23-plus-1.png" alt="failto load img" />

          <h2 className='product-name name2'>SAMSUNG GALAXY S23 PLUS</h2>
          <h2 className='price p2'>RS 18,000</h2>
          
          <div className="btn-box"><a href="Samsung-Galaxy-S23-Plus">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>
      </div>



      <div className="box">
        <div className="pro-1">
          <img src="./img/zflip-1.png" alt="failto load img" />

          <h2 className='product-name name2'>SAMSUNG GALAXY ZFLIP</h2>
          <h2 className='price p2'>RS 15,000</h2>
                <div className="btn-box"><a href="Samsung-Galaxy-zflip">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>


        <div className="pro-1">
          <img src="./img/zfold-1.png" alt="failto load img" />

          <h2 className='product-name name2'>SAMSUNG GALAXY ZFOLD 4</h2>
          <h2 className='price p2'>RS 16,000</h2>
                <div className="btn-box"><a href="Samsung-Galaxy-zfold">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>

      </div>




      <div className="company-name c2"> ONEPLUS </div>
      <div className="box">
        <div className="pro-1">
          <img src="./img/10T-1.png" alt="failto load img" />

          <h2 className='product-name name2'>ONEPLUS 10T</h2>
          <h2 className='price p2'>RS 12,000</h2>
          
          <div className="btn-box"><a href="OnePlus-10T">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>


        <div className="pro-1">
          <img src="./img/o11-2.png" alt="failto load img" />

          <h2 className='product-name'>ONEPLUS 11</h2>
          <h2 className='price'>RS 13,000</h2>
          
          <div className="btn-box"><a href="OnePlus-11">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>
      </div>


      <div className="box">
        <div className="pro-1">
          <img src="./img/o11R-2.png" alt="failto load img" />

          <h2 className='product-name'>ONEPLUS 11R</h2>
          <h2 className='price'>RS 15,000</h2>
          
          <div className="btn-box"><a href="OnePlus-11R">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>

        <div className="pro-1">
          <img src="./img/o12-1.png" alt="failto load img" />

          <h2 className='product-name'>ONEPLUS 12</h2>
          <h2 className='price'>RS 16,000</h2>
          
          <div className="btn-box"><a href="OnePlus-12">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>
      </div>





      <div className="company-name c2"> NOTHING PHONE </div>
      <div className="box">
        <div className="pro-1">
          <img src="./img/n1-1.jpg" alt="failto load img" />

          <h2 className='product-name name2'>NOTHING PHONE 1</h2>
          <h2 className='price p2'>RS 9,000</h2>
          
          <div className="btn-box"><a href="Nothing-1">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>


        <div className="pro-1">
          <img src="./img/n2-1.png" alt="failto load img" />

          <h2 className='product-name name2'>NOTHING PHONE 2</h2>
          <h2 className='price p2'>RS 10,000</h2>
          
          <div className="btn-box"><a href="Nothing-2">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>
      </div>


      <div className="box">
     


        <div className="pro-1">
          <img src="./img/mi-watch1.jpg" alt="failto load img" />

          <h2 className='product-name'>Mi Smart Watch</h2>
          <h2 className='price'>RS 449</h2>
                 <div className="btn-box"><a href="Mi-Smart-Watch">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>


        <div className="pro-1">
          <img src="./img/i13-pro-4.jpg" alt="failto load img" />

          <h2 className='product-name'>IPHONE 13 PRO MAX</h2>
          <h2 className='price'>RS 18,000</h2>
        
          <div className="btn-box"><a href="Iphone13-pro-max">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
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

export default Shop
