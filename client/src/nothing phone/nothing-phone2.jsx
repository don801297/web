
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Nothing2() {

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


            <img src="./img/n2-1.png" class="m1" alt="img1" checked></img>
            <img src="./img/n2-2.png" class="m2" alt="img2" ></img>
            <img src="./img/n2-1.png" class="m3" alt="img3" ></img>
            <img src="./img/n2-2.png" class="m4" alt="img4" ></img>
          </div>

          <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
          </div>

        </div>


        <div className="item-price-box">
          <span className='white-txt'>NOTHING PHONE 2</span> <br />
          <span className='item-price'>RS 11,000</span>

        </div>


        <div className="sep-delivery"></div>
        <div className="delivery-box">Free or fastest Delivery Overall India <br /> Within 3 - 4 Days</div>
        <div className="sep-delivery"></div>
        <div className="delivery-box">Storage 12+256GB</div>
        <div className="sep-delivery"></div>




        <div className="a-section"><h3 className='a-heading'>Select Colour</h3><br />

          <div className="color-box1">

            <div className="color">
              <input type="radio" id="html" {...register("color")} value="Nothing2-white" />
              <label for="html" className='color-label'>White </label>
            </div>
            <div className="color">
              <input type="radio" id="html" {...register("color")} value="Nothing2-dark-grey" />
              <label for="html" className='color-label'>Dark Grey</label>
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

          <div className="btn-box"> <button className='btnn' type="submit" value="submit" >BUY NOW</button></div>





        </form>



        <div className="sep-delivery"></div>

        <div className="a-section"><h3 className='a-heading'>Product Details</h3>

          <div className="detail-box">
            <div className="details-bold"> Brand</div>
            <div className="detail-text">Nothing</div>
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
            <div className="detail-text">6.7 Inches</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Resolution</div>
            <div className="detail-text">4k</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Model Name</div>
            <div className="detail-text">Nothing 2</div>
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
            <div className="detail-text">White</div>
          </div>


        </div>




        <div className="sep-delivery"></div>


        <div className="a-section"><h3 className='a-heading'>Whats in the Box?</h3><br />

          <span> Mobile Phone,Ejection Pin, USB Cable, Manual,S  </span>


        </div>




        <div className="sep-delivery"></div>

        <div className="manufacture"><h3 className='manufacture-h'>Form the manufacturer</h3><br />

          <div className="pro-bg-box">
            <img src="./img/n2-bg1.jpeg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/n2-bg2.jpeg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/n2-bg3.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/n2-bg4.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/n2-bg5.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/n2-bg6.jpg" alt="fail to load" />
          </div>




        </div>

        <br />



        <div className="sep-delivery"></div>



        <div className="a-section"><h3 className='a-heading'>Feature & Details</h3>
          <br />

          <ul className='desc-ul'>
            <li className='desc-li'> ☆【RAM, ROM & Expandable Storage】:- 12 GB RAM | 256 GB ROM(Inbuilt Memory) | Not Expandable | Dual SIM (Nano-SIM, dual stand-by) | RAM Type : LPDDR5 | Storage Type : UFS 3.1 | OTG Support || SIM1: Nano, SIM2: Nano | Network : 5G Connectivity on Both SIM Slots | Dual VoLTE(4G) | Wi-Fi 6; BT 5.3; NFC |
              Type C OTG Supportable | Type C Fast Charging Tecnology Support | Type C Earphone Support.   </li>

            <li className='desc-li'>☆【Display】:- 17.02 cm (6.7 inch) Full HD+ OLED Bezel-less with punch-hole || Flexible LTPO AMOLED Display with Refresh Rate of (1 Hz - 120 Hz) || Corning Gorilla Glass 5 Protection, HDR10+ & SGS Low Blue Light, 1,000,000:1 Contrast Ratio, 1000 nits 1600 nits, 240Hz Touch Sampling Rate, Haptic Touch Motor. || Now bigger and brighter, Phone (2) can intuitively adapt its 120 Hz refresh rate to preserve
              power when you're not on your phone. A killer display that doesn’t murder battery life. </li>

            <li className='desc-li'>☆【Processor】:- Qualcomm Snapdragon 8+ Gen 1 || Octa Core Processor || Primary Clock Speed : 3 GHz | Secondary Clock Speed : 2.5 GHz | Tertiary Clock Speed : 1.8 GHz || This smartphone is equipped with the Snapdragon 8+ Gen 1 chipset to deliver an incredibly fast performance. Upgraded chipset. A power move | Phone (2) boasts an 80% improvement on performance over its predecessor. Now with rapid speed,
              the best in-house heat management, advanced camera capabilities. And so much more.</li>

            <li className='desc-li'>	☆【Camera】:- 50 MP(OIS) +50MP Dual Camera Setup | 32MP Front Camera || Rear camera: Wide (main): 50 MP, Aperture Value of f/1.9, 24mm, 1/1.56", 1.0µm, PDAF, OIS | Ultra wide angle : 50 MP, f/2.2, 114˚, 1/2.76", 0.64µm, AF. Front camera: 32 MP, Aperture Value of f/2.5, (ultra-wide). | Video capture: Rear cam: 4K@60fps, 1080p@30/60fps, gyro-EIS, live HDR | Front cam: 1080p@30fps, EIS | You can capture the minutest
              details with the 2X Super-res Zoom camera and cherish the moments for years to come.</li>

            <li className='desc-li'>☆【Design & Build】:- In Disolay Fingerprint reader | stereo speakers. Phone (2) Designed with impressive features and a myriad of thought processes put together, this phone takes you to the next-level of interaction, thus allowing for a more focussed space. || Glass front (Gorilla Glass 5), glass back (Gorilla Glass), aluminum frame. || Multiple LED lights on the back (notifications, charging progress, camera fill light)
              IP54 - splash, water and dust resistant || Ruggedness : Dust proof </li>

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

export default Nothing2
