
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Earphone2() {

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


            <img src="./img/earphone2-1.jpg" class="m1" alt="img1" checked></img>
            <img src="./img/earphone2-2.jpg" class="m2" alt="img2" ></img>
            <img src="./img/earphone2-3.jpg" class="m3" alt="img3" ></img>
            <img src="./img/earphone2-4.jpg" class="m4" alt="img4" ></img>
          </div>

          <div class="dots">
            <label for="img1"></label>
            <label for="img2"></label>
            <label for="img3"></label>
            <label for="img4"></label>
          </div>

        </div>


        <div className="item-price-box">
          <span className='white-txt'>Boult Wired Earphone</span> <br />
          <span className='item-price'>RS 350</span>

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
            <div className="detail-text">Boult</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Colour</div>
            <div className="detail-text">Blue</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Ear Placement</div>
            <div className="detail-text">In Ear</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Noise Control</div>
            <div className="detail-text">Sound Isolation</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Headphone Jack</div>
            <div className="detail-text">3.5 mm Jack</div>
          </div>

          <div className="detail-box">
            <div className="details-bold"> Country of Origin</div>
            <div className="detail-text">India</div>
          </div>

      


        </div>




        <div className="sep-delivery"></div>


        <div className="a-section"><h3 className='a-heading'>Whats in the Box?</h3><br />

          <span> X1 earphones & 2 extra pair of earbuds</span>


        </div>


        <div className="sep-delivery"></div>

        <div className="sep-delivery"></div>

        <div className="manufacture"><h3 className='manufacture-h'>Form the manufacturer</h3><br />

          <div className="pro-bg-box">
            <img src="./img/earphone2-6.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/earphone2-5.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/earphone2-4.jpg" alt="fail to load" />
          </div>
          <div className="pro-bg-box">
            <img src="./img/earphone2-3.jpg" alt="fail to load" />
          </div>
          
          <div className="pro-bg-box">
            <img src="./img/earphone2-2.jpg" alt="fail to load" />
          </div>
         



        </div>

        <br />

        <div className="sep-delivery"></div>

        <div className="a-section"><h3 className='a-heading'> Description</h3>

          <div className="service-box">

            <div className="description-pp">In-line Controls: Answer/reject/ calls, play/pause, voice command. <br />
Ergonomically designed drivers: Aerospace grade AL alloy drivers give the best acoustics, 3D HD sound and a punchy bass. IPX5 Water-Resistant <br />
Ear fins for Sport Fit: Ear loop hold your buds in ear stably (colour of the ear loops may vary), perfectly fit for running, climbing, hiking, cycling etc <br />
Extra Bass: Boult’s Neodymium technology enables drivers to deliver extra punchy and deep bass with accentuates the warm mids and crystal clear sparky highs <br />
Built-in Mic: Condenser microphone for HD calls and Siri or Google assistant voice command <br />
Lightweight , comfortable & premium metallic finish, Tangle Free</div>
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

export default Earphone2
