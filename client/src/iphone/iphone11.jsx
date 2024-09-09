
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Iphone11() {

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


            <img src="./img/i11-1.jpg" class="m1" alt="img1" checked></img>
            <img src="./img/i11-2.jpg" class="m2" alt="img2" ></img>
            <img src="./img/i11-3.jpg" class="m3" alt="img3" ></img>
            <img src="./img/i11-4.jpg" class="m4" alt="img4" ></img>
          </div>

          <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
          </div>

        </div>


        <div className="item-price-box">
          <span className='white-txt'>APPLE IPHONE 11</span> <br />
          <span className='item-price'>RS 9,500</span>

        </div>


        <div className="sep-delivery"></div>
        <div className="delivery-box">Free or fastest Delivery Overall India <br /> Within 3 - 4 Days</div>
        <div className="sep-delivery"></div>




        <div className="delivery-box">Storage 128GB</div>
        <div className="sep-delivery"></div>




        <div className="a-section"><h3 className='a-heading'>Select Colour</h3><br />

          <div className="color-box1">

            <div className="color">
              <input type="radio" id="html" {...register("color")}   value="iphone11-white" />
              <label for="html" className='color-label'>White </label>
            </div>
            <div className="color">
              <input type="radio" id="html" {...register("color")}   value="iphone11-Black" />
              <label for="html" className='color-label'>Black</label>
            </div>


            <div className="color">
              <input type="radio" id="html" {...register("color")}   value="iphone11-purple" />
              <label for="html" className='color-label'>Purple</label>
            </div>

          </div>


          <div className="color-box1">

            <div className="color">
              <input type="radio" id="html" {...register("color")}   value="iphone11-red" />
              <label for="html" className='color-label'>Red</label>
            </div>
            <div className="color">
              <input type="radio" id="html" {...register("color")}   value="iphone11-yellow" />
              <label for="html" className='color-label'>Yellow</label>
            </div>

            <div className="color">
              <input type="radio" id="html" {...register("color")}   value="iphone11-green" />
              <label for="html" className='color-label'>Green</label>
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

        <input type="text"      {...register("ahn")} name='ahn' className="backend-product-name" value="Iphone11" />

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
            <div className="detail-text">iOS 14</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> CPU Speed</div>
            <div className="detail-text">2,65 GHz</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Memory Storage</div>
            <div className="detail-text">128 GB</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Screen Size</div>
            <div className="detail-text">6.1 Inches</div>
          </div>



          <div className="detail-box">
            <div className="details-bold"> Model Name</div>
            <div className="detail-text">iPhone 11</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Cellular Technology</div>
            <div className="detail-text">4G</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Connectivity Technology</div>
            <div className="detail-text">USB</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Colour</div>
            <div className="detail-text">Black</div>
          </div>


        </div>




        <div className="sep-delivery"></div>


        <div className="a-section"><h3 className='a-heading'>Whats in the Box?</h3><br />

          <span>* iPhone, USB-C to Lightning Cable</span>


        </div>


        <div className="sep-delivery"></div>

        <div className="sep-delivery"></div>

        <div className="manufacture"><h3 className='manufacture-h'>Form the manufacturer</h3><br />

          <div className="pro-bg-box">
            <img src="./img/i11-bg1.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg2-box">
            <img src="./img/i11-bg2.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/i11-bg3.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/i11-bg4.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/i11-bg5.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/i11-bg6.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/i11-bg7.jpg" alt="fail to load" />
          </div>


        </div>

        <br />

        <div className="sep-delivery"></div>

        <div className="a-section"><h3 className='a-heading'> Description</h3>

          <div className="service-box">

            <div className="description-pp">Shoot 4K videos, beautiful portraits, and sweeping landscapes
              with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life color in your photos, videos, and games on the 6.1-inch (15.5 cm diagonal) Liquid Retina display. Experience unprecedented performance with A13 Bionic for gaming, augmented reality (AR), and photography. Do more and charge less with all-day battery
              life. And worry less with water resistance up to 2 meters for 30 minutes.</div>
          </div>



        </div>
        <div className="sep-delivery"></div>
        <br />
        <div className="sep-delivery"></div>



        <div className="a-section"><h3 className='a-heading'>Feature & Details</h3>
          <br />

          <ul className='desc-ul'>
            <li className='desc-li'> 6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
            <li className='desc-li'> Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
            <li className='desc-li'> Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
            <li className='desc-li'>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo </li>
            <li className='desc-li'>Face ID for secure authentication </li>
            <li className='desc-li'> A13 Bionic chip with third-generation Neural Engine</li>
            <li className='desc-li'> Fast-charge capable  Wireless Charging</li>
            <li className='desc-li'> As part of our efforts to reach our environmental goals, iPhone no longer includes a power adapter or EarPods. Please use your
              existing Apple power adapter and headphones or buy these accessories separately</li>

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

export default Iphone11
