
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Iphone15pro() {

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


            <img src="./img/i15-pro-1.png" class="m1" alt="img1" checked></img>
            <img src="./img/i15-pro-2.png" class="m2" alt="img2" ></img>
            <img src="./img/i15-pro-3.png" class="m3" alt="img3" ></img>
            <img src="./img/i15-pro-4.png" class="m4" alt="img4" ></img>
          </div>

          <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
          </div>

        </div>


        <div className="item-price-box">
          <span className='white-txt'>IPHONE 15 PRO</span> <br />
          <span className='item-price'>RS 23,000</span>

        </div>


        <div className="sep-delivery"></div>
        <div className="delivery-box">Free or fastest Delivery Overall India <br /> Within 3 - 4 Days</div>
        <div className="sep-delivery"></div>


        <div className="delivery-box">Storage 256GB</div>
        <div className="sep-delivery"></div>




        <div className="a-section"><h3 className='a-heading'>Select Colour</h3><br />

          <div className="color-box1">

            <div className="color">
              <input type="radio" id="html" {...register("color")} value="iphone15pro-black-titanium" />
              <label for="html" className='color-label'>Black Titanium</label>
            </div>
            <div className="color">
              <input type="radio" id="html" {...register("color")} value="iphone15pro-white-titanium" />
              <label for="html" className='color-label'>White Titanium</label>
            </div>


          

          </div>


          <div className="color-box1">

          
            <div className="color">
              <input type="radio" id="html" {...register("color")} value="iphone15pro-Blue-titanium" />
              <label for="html" className='color-label'>Blue Titanium</label>
            </div>

            <div className="color">
              <input type="radio" id="html" {...register("color")} value="iphone15pro-natural-titanium" />
              <label for="html" className='color-label'>Natural Titanium</label>
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

        <input type="text"      {...register("ahn")} name='ahn' className="backend-product-name" value="Iphone15pro" />
          <div className="btn-box"> <button className='btnn' type="submit" value="submit" >BUY NOW</button></div>





        </form>



        <div className="sep-delivery"></div>

        <div className="a-section"><h3 className='a-heading'>Product Details</h3>

          <div className="detail-box">
            <div className="details-bold"> Brand</div>
            <div className="detail-text">Apple</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Operating System</div>
            <div className="detail-text">iOS </div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> CPU Speed</div>
            <div className="detail-text">4.23 GHz</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Memory Storage</div>
            <div className="detail-text">256 GB</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Screen Size</div>
            <div className="detail-text">6.1 Inches</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Resolution</div>
            <div className="detail-text">4k</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Model Name</div>
            <div className="detail-text">iPhone </div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Cellular Technology</div>
            <div className="detail-text">5G</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Connectivity Technology</div>
            <div className="detail-text">Wi-Fi Bluetooth</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Colour</div>
            <div className="detail-text">Pink</div>
          </div>


        </div>




        <div className="sep-delivery"></div>


        <div className="a-section"><h3 className='a-heading'>Whats in the Box?</h3><br />

          <span>* iPhone with iOS 16,  USB-C to Lightning Cable</span>


        </div>


        <div className="sep-delivery"></div>

        <div className="sep-delivery"></div>

        <div className="manufacture"><h3 className='manufacture-h'>Form the manufacturer</h3><br />

          <div className="pro-bg-box">
            <img src="./img/i15-probg-1.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/i15-probg2.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/i15-probg3.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/i15-probg4.jpg" alt="fail to load" />
          </div>
          
          



        </div>

        <br />

        <div className="sep-delivery"></div>

        <div className="a-section"><h3 className='a-heading'> Description</h3>

          <div className="service-box">

            <div className="description-pp">iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A17 Pro chip, a 
              customizable Action button, and the most powerful iPhone camera system ever.</div>
          </div>



        </div>
        <div className="sep-delivery"></div>
        <br />
        <div className="sep-delivery"></div>



        <div className="a-section"><h3 className='a-heading'>Feature & Details</h3>
          <br />

          <ul className='desc-ul'>
            <li className='desc-li'>FORGED IN TITANIUM — iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s 
              tougher than any smartphone glass. And it’s splash, water, and dust resistant.</li>
            <li className='desc-li'> ADVANCED DISPLAY — The 6.1” Super Retina XDR display with ProMotion ramps up refresh rates to 120Hz when you need exceptional graphics performance. Dynamic Island bubbles up alerts and Live Notifications. Plus, with Always-On display,
               your Lock Screen stays glanceable, so you don’t have to tap it to stay in the know.</li>
            <li className='desc-li'> GAME-CHANGING A17 PRO CHIP — A Pro-class GPU makes mobile games feel so immersive, with rich environments and realistic characters. 
              A17 Pro is also incredibly efficient and helps to deliver amazing all-day battery life.</li>
            <li className='desc-li'>POWERFUL PRO CAMERA SYSTEM — Get incredible framing flexibility with 7 pro lenses. Capture super high-resolution photos with more 
              color and detail using the 48MP Main camera. And take sharper close-ups from farther away </li>
            <li className='desc-li'>CUSTOMIZABLE ACTION BUTTON — Action button is a fast track to your favorite feature. Just set the one you want, like Silent mode, Camera,
               Voice Memo, Shortcut, and more. Then press and hold to launch the action.</li>
            

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

export default Iphone15pro
