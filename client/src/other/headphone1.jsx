
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Headphone1() {

  const [value, setValue] = useState()
  const [count, setCount] = useState()
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 3000);
    })
  }

  //const onSubmit = async (data) => {
  // await delay(2)
  //let r = await fetch("http://localhost:3000/", { method: "post", body: JSON.stringify(data) })
  //let res = await r.text()
  //console.log(data, res)


  const onSubmit = async (data) => {
    navigate("/adress")
    let r = await fetch(import.meta.env.VITE_MONGO, {
      method: "POST", headers: {
        "Content-Type": "application/json",
      }, body: JSON.stringify(data)


    })
    let res = await r.text()

    console.log(data, res)


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


      <div className="i12-body">



        <div className="navbar">
          <div className="logo">
            <img className="nav-img" src="./img/navlogo2.png" alt="fail img to load net banking" />
            <p className='phone-shop'>Phone Shop</p>
          </div>

          <div>
            <nav>
              <ul className='sidebar'>
                <li onClick={hideSidebar}> <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fc3746"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Products</a></li>
                <li><a href="/aboutUS">About</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="contact">Help</a></li>
              </ul>

              <ul>

                <li class="hideOnMobile"><a href="/">Home</a></li>
                <li class="hideOnMobile"><a href="/shop">Products</a></li>
                <li class="hideOnMobile"><a href="/aboutUS">About</a></li>
                <li class="hideOnMobile"><a href="/contact">Contact</a></li>
                <li class="hideOnMobile"><a href="contactUS">Help</a></li>
                <li class="menu-button" onClick={showSidebar}> <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg></a></li>
              </ul>
            </nav>
          </div>

        </div>




        <div className="slider">

          <div className="images">
            <input type="radio" name="slide" id="img1" />
            <input type="radio" name="slide" id="img2" />
            <input type="radio" name="slide" id="img3" />
            <input type="radio" name="slide" id="img4" />


            <img src="./img/headphone1.jpg" class="m1" alt="img1" checked></img>
            <img src="./img/headphone2.jpg" class="m2" alt="img2" ></img>
            <img src="./img/headphone3.jpg" class="m3" alt="img3" ></img>
            <img src="./img/headphone4.jpg" class="m4" alt="img4" ></img>
          </div>

          <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
          </div>

        </div>


        <div className="item-price-box">
          <span className='white-txt'>Zebronics Wireless Headphone</span> <br />
          <span className='item-price'>RS 700</span>

        </div>


        <div className="sep-delivery"></div>
        <div className="delivery-box">Free or fastest Delivery Overall India <br /> Within 3 - 4 Days</div>
        <div className="sep-delivery"></div>



        <div className="a-section"><h3 className='a-heading'> Shop with confidence</h3>

          <div className="service-box">
            <div className="srvice1">✔ 7 days Replacement </div>
            <div className="srvice1">✔ Free Delivery</div>
          </div>

          <div className="service-box">
            <div className="srvice1">✔ 1 Year Warranty</div>
            <div className="srvice1">✔ Top Brand</div>
          </div>
          <div className="service-box">
            <div className="srvice1">✔ Fastese Delivery</div>
            <div className="srvice1">✔ Secure transaction</div>
          </div>

        </div>




        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <div className="btn-box"> <button className='btnn' type="submit" value="submit" >BUY NOW</button></div>





        </form>



        <div className="sep-delivery"></div>

        <div className="a-section"><h3 className='a-heading'>Product Details</h3>

          <div className="detail-box">
            <div className="details-bold"> Brand</div>
            <div className="detail-text">Zebronics India</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Bettery Life</div>
            <div className="detail-text">60 Hours</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Bluetooth Range</div>
            <div className="detail-text">10 Metres</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Bluetooth Version</div>
            <div className="detail-text">4.2</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Microphone Formate</div>
            <div className="detail-text">Built-in</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Item Weight</div>
            <div className="detail-text">270 g</div>
          </div>

      


        </div>




        <div className="sep-delivery"></div>


        <div className="a-section"><h3 className='a-heading'>Whats in the Box?</h3><br />

          <span> Headphone <br /> Charging Cable <br /> User Manual</span>


        </div>


        <div className="sep-delivery"></div>

        <div className="sep-delivery"></div>

        <div className="manufacture"><h3 className='manufacture-h'>Form the manufacturer</h3><br />

          <div className="pro-bg-box">
            <img src="./img/headphone2.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/headphone5.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/headphone6.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/headphone7.jpg" alt="fail to load" />
          </div>
          
          <div className="pro-bg-box">
            <img src="./img/headphone3.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/headphone4.jpg" alt="fail to load" />
          </div>



        </div>

        <br />

        <div className="sep-delivery"></div>

        <div className="a-section"><h3 className='a-heading'> Description</h3>

          <div className="service-box">

            <div className="description-pp">Comfortable Design: Beat the workday blues with music on Zeb-Thunder wireless headphone that comes in an ergonomic design a perfect fit and design for long hours use.
                 Microphone sensitivity -40dB ±1dB. Microphone impedance 1.2k Ω <br />
Soft & comfortable earcups: Listen to music, podcasts and more for long hours with soft ear cups making it super comfortable for daily wear <br />
Adjustable headband: Adust your headband to your comfortable best while you work or listen to music <br />
9hrs Playback Time: Fall in love with the audio experience with 9 hours of playback time to keep you going. Sensitivity : -113dB ±3dB <br />
Superior Sound Quality: Magnify every speck of sound with superior sound quality on Zeb-Thunder wireless headphone</div>
          </div>



        </div>
       
        
        



        



        

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



     

    </>
  )
}

export default Headphone1
