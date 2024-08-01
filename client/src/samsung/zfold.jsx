
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Zfold() {

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


            <img src="./img/zfold-1.png" class="m1" alt="img1" checked></img>
            <img src="./img/zfold-2.png" class="m2" alt="img2" ></img>
            <img src="./img/zfold-3.png" class="m3" alt="img3" ></img>
            <img src="./img/zfold-1.png" class="m4" alt="img4" ></img>
          </div>

          <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
          </div>

        </div>


        <div className="item-price-box">
          <span className='white-txt'>SAMSUNG GAZLAXY ZFOLD 4</span> <br />
          <span className='item-price'>RS 16,000</span>

        </div>


        <div className="sep-delivery"></div>
        <div className="delivery-box">Free or fastest Delivery Overall India <br /> Within 3 - 4 Days</div>
        <div className="sep-delivery"></div>

        <div className="delivery-box">Storage 256GB</div>
        <div className="sep-delivery"></div>




        <div className="a-section"><h3 className='a-heading'>Select Colour</h3><br />

          <div className="color-box1">

            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-zfold4-phantom-black" />
              <label for="html" className='color-label'>Phantom Black</label>
            </div>
            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-zfold4-Graygreen" />
              <label for="html" className='color-label'>Graygreen</label>
            </div>


          </div>

          <div className="color-box1">

            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-zfold4-beige" />
              <label for="html" className='color-label'>Beige</label>
            </div>
            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-zfold4-burgundy" />
              <label for="html" className='color-label'>Burgundy   </label>
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


        <input type="text"      {...register("ahn")} name='ahn' className="backend-product-name" value="samsung-zfold-4" />

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
            <div className="detail-text">7.6 Inches</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Resolution</div>
            <div className="detail-text">4k</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Model Name</div>
            <div className="detail-text">ZFold</div>
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

          <span> Mobile Phone,Ejection Pin, USB Cable, Manuals </span>


        </div>


        

        <div className="sep-delivery"></div>

        <div className="manufacture"><h3 className='manufacture-h'>Form the manufacturer</h3><br />

          <div className="pro-bg-box">
            <img src="./img/zfold4-bg1.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/zfold4-bg2.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/zfold4-bg3.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/zfold4-bg4.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/zfold4-bg5.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/zfold4-bg6.jpg" alt="fail to load" />
          </div>


        </div>

        <br />

      
      
        <div className="sep-delivery"></div>



        <div className="a-section"><h3 className='a-heading'>Feature & Details</h3>
          <br />

          <ul className='desc-ul'>
            <li className='desc-li'>Stands out. Stands up. Unfolds. The Galaxy Z Fold4 does a lot in one hand with its 15.73 cm(6.2-inch) Cover Screen. Unfolded, the 19.21 cm(7.6-inch) Main Screen lets you really get into the zone. Pushed-back bezels and the Under Display Camera means there's more screen
               and no black dot getting between you and the breathtaking Infinity Flex Display.</li>

            <li className='desc-li'> Do more than more with Multi View. Whether toggling between texts or catching up on emails, take full advantage of the expansive Main Screen with Multi View. PC-like power in your pocket 
              transforms apps optimized with One UI to give you menus and more in a glance</li>

            <li className='desc-li'>New Taskbar for PC-like multitasking. Wipe out tasks in fewer taps. Add apps to the Taskbar for quick navigation and bouncing between windows when you're in the groove.4 And with App Pair,
               one tap launches up to three apps, all sharing one super-productive screen</li>

            <li className='desc-li'>	Our toughest Samsung Galaxy foldables ever. From the inside out, Galaxy Z Fold4 is made with materials that are not only stunning, but stand up to life's bumps and fumbles. The front and rear panels, made with exclusive Corning Gorilla Glass Victus+, are ready to resist sneaky scrapes and scratches. With our toughest
               aluminum frame made with Armor Aluminum, this is one durable smartphone.</li>

            <li className='desc-li'>World’s first water resistant foldable smartphones. Be adventurous, rain or shine. You don't have to sweat the forecast 
              when you've got one of the world's first water-resistant foldable smartphones. </li>
           
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

export default Zfold
