
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Earphone1() {

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


            <img src="./img/earphone1.jpg" class="m1" alt="img1" checked></img>
            <img src="./img/earphone2.jpg" class="m2" alt="img2" ></img>
            <img src="./img/earphone3.jpg" class="m3" alt="img3" ></img>
            <img src="./img/earphone4.jpg" class="m4" alt="img4" ></img>
          </div>

          <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
          </div>

        </div>


        <div className="item-price-box">
          <span className='white-txt'>Zebronic Earphone</span> <br />
          <span className='item-price'>RS 140</span>

        </div>


        <div className="sep-delivery"></div>
        <div className="delivery-box">Free or fastest Delivery Overall India <br /> Within 3 - 4 Days</div>
        <div className="sep-delivery"></div>



        <div className="a-section"><h3 className='a-heading'> Shop with confidence</h3>

          <div className="service-box">
            <div className="srvice1">✔ 24x7 Customer Support  </div>
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
            <div className="detail-text">Zebronics</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> colour</div>
            <div className="detail-text">Blue</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Ear Placement</div>
            <div className="detail-text">In Ear</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Memory Storage</div>
            <div className="detail-text">256 GB</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Impedance</div>
            <div className="detail-text">16 Ohm</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Noise Control </div>
            <div className="detail-text">Sound Isolation</div>
          </div>

         


        </div>




        <div className="sep-delivery"></div>


        <div className="a-section"><h3 className='a-heading'>Whats in the Box?</h3><br />

          <span>ZEBRONICS Wired Earphone</span>


        </div>


        <div className="sep-delivery"></div>

        <div className="sep-delivery"></div>

        <div className="manufacture"><h3 className='manufacture-h'>Form the manufacturer</h3><br />

          <div className="pro-bg-box">
            <img src="./img/earphone1.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/earphone2.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/earphone3.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/earphone4.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/earphone5.jpg" alt="fail to load" />
          </div>



        </div>

        <br />

        <div className="sep-delivery"></div>

       
       
        <div className="sep-delivery"></div>



        <div className="a-section"><h3 className='a-heading'>Feature & Details</h3>
          <br />

          <ul className='desc-ul'>
            <li className='desc-li'> The earphone comes with a snug fit providing utmost comfort while wearing them regularly. Connect the 3.5mm jack to the phone and wait for a few seconds for the product to get sync with the phone. Water Resistant : Yes</li>
            <li className='desc-li'> The snug-fit also ensures a passive noise cancellation so that you can bask in the pure audio experience.</li>
            <li className='desc-li'> Impedance 16 Ω</li>
           
            <li className='desc-li'>Frequency response 20Hz-20kHz </li>
            <li className='desc-li'> Cable length 1.2m</li>
            <li className='desc-li'> Country of Origin: China</li>
            

          </ul>



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



     

    </>
  )
}

export default Earphone1
