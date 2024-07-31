import { useState } from 'react'


import './App.css'
import { useNavigate } from 'react-router-dom';
import { set } from 'mongoose';

function App() {

  const [bor, setBor] = useState("2px solid white")

  const navigate = useNavigate();

  const handleclick = () => {



    navigate("/")



  }

  const handleclickN = () => {


    navigate("/Notify")


  }

  const handleclickW = () => {


    navigate("/Wallet")


  }

  const handleclickk = () => {


    navigate("/kabaddi")


  }

  const handleclickF = () => {


    navigate("/football")


  }

  const handleclickv = () => {


    navigate("/Volleyball")




   
  }


  function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  return (
    <>


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

     
      <div className="box">
      <div className="pro-1">
          <img src="./img/earphone1.jpg" alt="failto load img" />

          <h2 className='product-name'>Zebronic Earphone</h2>
          <h2 className='price'>RS 140 </h2>
          
          <div className="btn-box"><a href="earphone">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
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
          <img src="./img/Watch4-1.webp" alt="failto load img" />

          <h2 className='product-name'>Rps Digital Watch</h2>
          <h2 className='price'>RS 120</h2>
          <div className="btn-box"><a href="RPS-watch">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>
        </div>


        <div className="pro-1">
          <img src="./img/i15-1.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 15</h2>
          <h2 className='price'>RS 18,000</h2>
          

          <div className="btn-box"><a href="Iphone15">   <button className='btnn btnn2' type="submit" value="submit" >BUY NOW</button>  </a></div>





        
        </div>
      </div>









      <h3 className='heading-1'>Why Choose Phone SHOP ?</h3>
      <h1 className='heading-2'><span className='white-txt'>Beacause its Totally Trusted</span>
      </h1>




      <div className="box">
        <div className="pro-1 pro11">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z" /></svg>
          <h2 className='product-name name2'>FREE SHIPPING</h2>
          <p className='icon-box-discription'>

            Delight in seamless free shipping, enhancing your shopping experience. Navigate our diverse collection, where cost savings meet product joy
          </p>

        </div>

        <div className="pro-1 pro11">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" /></svg>
          <h2 className='product-name name2'>SECURE PAYMENTS</h2>
          <p className='icon-box-discription'>


            Shop with confidence using our secure payment methods. Your transactions are protected, providing peace of mind for a worry-free shopping
          </p>

        </div>



      </div>



      <div className="box b2">
        <div className="pro-1 pro11">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
          <h2 className='product-name name2'>ORDER TRACKING</h2>
          <p className='icon-box-discription'>

            Track your order effortlessly with our streamlined system. Stay informed and in control as your purchase makes its way to your doorstep   </p>

        </div>

        <div className="pro-1 pro11">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" /></svg>
          <h2 className='product-name name2'>EASY RETURNS</h2>
          <p className='icon-box-discription'>


            Celebrate worry-free shopping with our hassle-free returns – because we're here to make your shopping experience as smooth as possible
          </p>

        </div>



      </div>



      <div className="custumer-review">


        <h3 className='heading-1 h1'>What our Client Say ?</h3>
        <h2 className='heading-2 h2'><span className='white-txt'>CUSTOMER TESTIMONIALS</span>
        </h2>

        <div className="review-box">


          
        <img src="./img/star.jpeg" alt="fail to load start rating img " />

<p className='review-p'>

It is genuine apple , I impressed with there Service. I don't know about the other bad reviews here or on redit or quora regarding this sellers authenticity saying they don't give genuine products or whatever but mine was 100% genuine, good camera , battery (chargeing) is OK , totally value for money
</p>

<p className='review-p'>

  Ajay Agarwal
</p>


          <img src="./img/star.jpeg" alt="fail to load start rating img " />

          <p className='review-p'>

          Genuine apple product, delivered as promised by @Gadgat._.hub and @the_gadget_seller It’s total paisa vasool. Being an iPhone you can go for it with total peace of mind. Excellent camera both during day and night with a good battery life.
          </p>

          <p className='review-p'>

            SURENDRA SING
          </p>






          <img src="./img/star.jpeg" alt="fail to load start rating img " />

          <p className='review-p'>

          Firstly im affride to purchase from this site but After Getting the Phone , I’m genuinely impressed with its performance and There Services.
          </p>

          <p className='review-p'>

            MANISH MISHRA
          </p>




        </div>
      </div>




      <div className="review-box">

        <h3 className='heading-1 h1'>BEST DEAL EVER OF ALL TIME</h3>

        <p className='review-p deal-p'>

          Don’t miss this exclusive opportunity to embark on a journey of unbeatable savings and cutting-edge technology. It’s time to secure the best deals and upgrade your experience, so seize the moment and start shopping now!
        </p>


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
    </>
  )
}
export default App
