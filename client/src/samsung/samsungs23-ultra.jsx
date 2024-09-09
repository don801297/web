
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function S23ultra() {

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


            <img src="./img/s23-ultra-1.png" class="m1" alt="img1" checked></img>
            <img src="./img/s23-ultra-2.png" class="m2" alt="img2" ></img>
            <img src="./img/s23-ultra-3.png" class="m3" alt="img3" ></img>
            <img src="./img/s23-ultra-1.png" class="m4" alt="img4" ></img>
          </div>

          <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
          </div>

        </div>


        <div className="item-price-box">
          <span className='white-txt'>SAMSUNG GALAXY S23 ULTRA</span> <br />
          <span className='item-price'>RS 15,000</span>

        </div>


        <div className="sep-delivery"></div>
        <div className="delivery-box">Free or fastest Delivery Overall India <br /> Within 3 - 4 Days</div>
        <div className="sep-delivery"></div>

        <div className="delivery-box">Storage 256GB</div>
        <div className="sep-delivery"></div>




        <div className="a-section"><h3 className='a-heading'>Select Colour</h3><br />

          <div className="color-box1">

            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-s23ultra-phantom-black" />
              <label for="html" className='color-label'>Phantom Black</label>
            </div>
            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-s23ultra-green" />
              <label for="html" className='color-label'>Green</label>
            </div>


          </div>

          <div className="color-box1">

            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-s23ultra-lavender" />
              <label for="html" className='color-label'>Lavender</label>
            </div>
            <div className="color">
              <input type="radio" id="html" {...register("color")} value="samsung-s23ultra-cream" />
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

        <input type="text"      {...register("ahn")} name='ahn' className="backend-product-name" value="samsung-s23-ultra" />

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
            <div className="detail-text">6.8 Inches</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Resolution</div>
            <div className="detail-text">4k</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Model Name</div>
            <div className="detail-text">S23 Ultra</div>
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
            <div className="detail-text">Green</div>
          </div>


        </div>




        <div className="sep-delivery"></div>


        <div className="a-section"><h3 className='a-heading'>Whats in the Box?</h3><br />

          <span> Mobile Phone,Ejection Pin, USB Cable, Manual,S Pen </span>


        </div>


        

        <div className="sep-delivery"></div>

        <div className="manufacture"><h3 className='manufacture-h'>Form the manufacturer</h3><br />

          <div className="pro-bg-box">
            <img src="./img/s23ultra-bg1.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/s23ultra-bg2.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/s23ultra-bg3.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/s23ultra-bg4.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/s23ultra-bg5.jpg" alt="fail to load" />
          </div>



        </div>

        <br />

      
      
        <div className="sep-delivery"></div>



        <div className="a-section"><h3 className='a-heading'>Feature & Details</h3>
          <br />

          <ul className='desc-ul'>
            <li className='desc-li'> More innovation, less footprint – Galaxy S23 Ultra's striking symmetrical design returns with one major difference: recycled and eco-conscious materials. From the metal frame
               to the glass finish, it's polished with fresh new colors inspired by nature. </li>

            <li className='desc-li'> Note's signature tool comes built in - The built-in S Pen keeps the legacy of Note alive. Plus, it helps you ditch the dependency on notebooks,
               making sketches and jotting notes effortless and eco-friendly.</li>

            <li className='desc-li'>Low light. Camera. Action - A Pro-grade Camera grabs brighter photos and video, dusk to dawn. The intelligent pixel sensor adapts
               to low light with Nightography and the camera lens tones down flare for clearer captures</li>

            <li className='desc-li'>	200MP. Wow-worthy resolution - Resolution on the Wide-angle Camera has nearly doubled, delivering strikingly clear photos. Zoom and crop your
               shots for a whole new view —or leave it intact for brilliant detail, corner to corner.</li>

            <li className='desc-li'>Power for those who don't pause - Your quest for epic mobile gaming is over. Snapdragon 8 Gen 2 Mobile Platform for Galaxy
               optimizes and streamlines your device for silky smooth games —without draining the battery </li>
           
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

export default S23ultra
