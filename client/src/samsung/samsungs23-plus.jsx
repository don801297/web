
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function S23plus() {

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


            <img src="./img/s23-plus-1.png" class="m1" alt="img1" checked></img>
            <img src="./img/s23-plus-2.png" class="m2" alt="img2" ></img>
            <img src="./img/s23-plus-3.png" class="m3" alt="img3" ></img>
            <img src="./img/s23-plus-2.png" class="m4" alt="img4" ></img>
          </div>

          <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
          </div>

        </div>


        <div className="item-price-box">
          <span className='white-txt'>SAMSUNG GALAXY S23 PLUS</span> <br />
          <span className='item-price'>RS 14,000</span>

        </div>


        <div className="sep-delivery"></div>
        <div className="delivery-box">Free or fastest Delivery Overall India <br /> Within 3 - 4 Days</div>
        <div className="sep-delivery"></div>

        <div className="delivery-box">Storage 256GB</div>
        <div className="sep-delivery"></div>




        <div className="a-section"><h3 className='a-heading'>Select Colour</h3><br />

          <div className="color-box1">

            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-s23plus-phantom-black" />
              <label for="html" className='color-label'>Phantom Black</label>
            </div>
            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-s23plus-green" />
              <label for="html" className='color-label'>Green</label>
            </div>


          </div>

          <div className="color-box1">

            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-s23plus-lavender" />
              <label for="html" className='color-label'>Lavender</label>
            </div>
            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-s23plus-cream" />
              <label for="html" className='color-label'>Cream</label>
            </div>


          </div>

        </div>



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

        <input type="text"      {...register("ahn")} name='ahn' className="backend-product-name" value="samsung-s23-plus" />

          <div className="btn-box"> <button className='btnn' type="submit" value="submit" >BUY NOW</button></div>





        </form>



        <div className="sep-delivery"></div>

        <div className="a-section"><h3 className='a-heading'>Product Details</h3>

          <div className="detail-box">
            <div className="details-bold"> Brand</div>
            <div className="detail-text">Samsung</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Operating System</div>
            <div className="detail-text">Android</div>
          </div>



          <div className="detail-box">
            <div className="details-bold"> Memory Storage</div>
            <div className="detail-text">256 GB</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Screen Size</div>
            <div className="detail-text">6.6 Inches</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Resolution</div>
            <div className="detail-text">4k</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Model Name</div>
            <div className="detail-text">S23 Plus</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Cellular Technology</div>
            <div className="detail-text">5G</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Connectivity Technology</div>
            <div className="detail-text">Wi-Fi</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Colour</div>
            <div className="detail-text">Phantom Black</div>
          </div>


        </div>




        <div className="sep-delivery"></div>


        <div className="a-section"><h3 className='a-heading'>Whats in the Box?</h3><br />

          <span> Phone Case <br /> Power Adapter <br /> USB Cable </span>


        </div>




        <div className="sep-delivery"></div>

        <div className="manufacture"><h3 className='manufacture-h'>Form the manufacturer</h3><br />

          <div className="pro-bg-box">
            <img src="./img/s23plus-bg1.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/s23plus-bg2.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/s23plus-bg3.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/s23plus-bg4.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/s23plus-bg5.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/s23plus-bg6.jpg" alt="fail to load" />
          </div>


        </div>

        <br />



        <div className="sep-delivery"></div>



        <div className="a-section"><h3 className='a-heading'>Feature & Details</h3>
          <br />

          <ul className='desc-ul'>
            <li className='desc-li'> 157.8 x 76.2 x 7.6 mm (6.21 x 3.00 x 0.30 in) </li>

            <li className='desc-li'> 	Glass front (Gorilla Glass Victus 2), glass back (Gorilla Glass Victus 2), aluminum frame</li>

            <li className='desc-li'>Type	Dynamic AMOLED 2X, 120Hz, HDR10+, 1200 nits (HBM), 1750 nits (peak)
              Size	6.6 inches, 105.3 cm2 (~87.6% screen-to-body ratio)</li>

            <li className='desc-li'>	Sensors	Fingerprint (under display, ultrasonic), accelerometer, gyro, proximity, compass, barometer</li>

            <li className='desc-li'>Li-Ion 4700 mAh, non-removable
              Charging	45W wired, PD3.0, 65% in 30 min (advertised)
              15W wireless (Qi/PMA)
              4.5W reverse wireless </li>

          </ul>



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





    </>
  )
}

export default S23plus
