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
  return (
    <>


      <div className="header">
        <div className="navbar">
          <div className="logo">
            <img className="nav-img" src="./img/navlogo2.png" alt="fail img to load net banking" />
            <p className='phone-shop'>Phone Shop</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fc3746"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
        </div>

        <h3 className='heading-1'>Bradn New & Totally Original Items</h3>
        <h1 className='heading-2' ><span className='white-txt'>Get Smartphones in Very</span>
          <span className='red-txt'> Affordable Price- Rang </span></h1>

        <span className='shop-btn'>
          <a href="shop">Shop</a>
        </span>
      </div>

      <div className="company-name"> IPHONE </div>
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
          <img src="./img/i14-1.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 14</h2>
          <h2 className='price'>RS 16,000</h2>
          <button> <a className='buy' href="Iphone14">BUY</a></button>
        </div>


        <div className="pro-1">
          <img src="./img/i15-1.png" alt="failto load img" />

          <h2 className='product-name'>IPHONE 15</h2>
          <h2 className='price'>RS 18,000</h2>
          <button> <a className='buy' href="Iphone15">BUY</a></button>
        </div>
      </div>









      <h3 className='heading-1'>Why Choose Phone SHOP ?</h3>
      <h1 className='heading-2'><span className='white-txt'>Beacause its Totally Trusted</span>
      </h1>




      <div className="box">
        <div className="pro-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-160q-50 0-85-35t-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T280-280q0-17-11.5-28.5T240-320q-17 0-28.5 11.5T200-280q0 17 11.5 28.5T240-240ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm600 120q17 0 28.5-11.5T760-280q0-17-11.5-28.5T720-320q-17 0-28.5 11.5T680-280q0 17 11.5 28.5T720-240Zm-40-200h170l-90-120h-80v120ZM360-540Z" /></svg>
          <h2 className='product-name name2'>FREE SHIPPING</h2>
          <p className='icon-box-discription'>

            Delight in seamless free shipping, enhancing your shopping experience. Navigate our diverse collection, where cost savings meet product joy
          </p>

        </div>

        <div className="pro-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" /></svg>
          <h2 className='product-name name2'>SECURE PAYMENTS</h2>
          <p className='icon-box-discription'>


            Shop with confidence using our secure payment methods. Your transactions are protected, providing peace of mind for a worry-free shopping
          </p>

        </div>



      </div>



      <div className="box b2">
        <div className="pro-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
          <h2 className='product-name name2'>ORDER TRACKING</h2>
          <p className='icon-box-discription'>

            Track your order effortlessly with our streamlined system. Stay informed and in control as your purchase makes its way to your doorstep   </p>

        </div>

        <div className="pro-1">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" /></svg>
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

            I couldn't be happier with my Black Friday Shop experience. The deals were incredible, and the quality of the products I purchased exceeded my expectations. I was particularly impressed with the seamless shopping process and the quick, hassle-free delivery.
          </p>

          <p className='review-p'>

            SURENDRA SING
          </p>






          <img src="./img/star.jpeg" alt="fail to load start rating img " />

          <p className='review-p'>

            Absolutely thrilled with my experience at this online store! The selection is fantastic, the prices are unbeatable, and the customer service is top-notch. I recently purchased a camera, and not only did it arrive quickly, but the quality exceeded my expectations. Highly recommended!
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
          <li className='footer-li'>  <a href="/">HOME </a></li>
          <li className='footer-li'><a href="/shop">SHOP </a></li>
          <li className='footer-li'><a href="/aboutUS">ABOUT </a></li>
          <li className='footer-li'><a href="/contact">CONTACT</a></li>
        </ul>


      </div>
    </>
  )
}
export default App
