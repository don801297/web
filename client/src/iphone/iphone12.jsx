
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Iphone12() {

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







  return (
    <>


<div className="i12-body">



      <div className="navbar">
        <div className="logo">
          <img className="nav-img" src="./img/navlogo2.png" alt="fail img to load net banking" />
          <p className='phone-shop'>Phone Shop</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fc3746"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
      </div>




      <div className="slider">

        <div className="images">
          <input type="radio" name="slide" id="img1" />
          <input type="radio" name="slide" id="img2" />
          <input type="radio" name="slide" id="img3" />
          <input type="radio" name="slide" id="img4" />


          <img src="./img/i12-4.png" class="m1" alt="img1" checked></img>
          <img src="./img/i12-2.png" class="m2" alt="img2" ></img>
          <img src="./img/i12-3.png" class="m3" alt="img3" ></img>
          <img src="./img/i12-4.png" class="m4" alt="img4" ></img>
        </div>

        <div class="dots">
          <label for="img1"></label>
          <label for="img2"></label>
          <label for="img3"></label>
          <label for="img4"></label>
        </div>

      </div>


      <div className="item-price-box">
        <span className='white-txt'>APPLE IPHONE 12</span> <br />
        <span className='item-price'>RS 13,000</span>

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

        <div className="buy-btn-box buy-btn-box2">
          <button type="submit" value="submit" className="buy-btn">
            BUY

          </button>
        </div>





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
          <div className="detail-text">3.1 GHz</div>
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
          <div className="detail-text">iPhone 12</div>
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
          <div className="detail-text">Purple</div>
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
          <img src="./img/i12-bg1.jpg" alt="fail to load" />
        </div>
        <div className="pro-bg-box">
          <img src="./img/i12-bg2.jpg" alt="fail to load" />
        </div>
        <div className="pro-bg-box">
          <img src="./img/i12-bg3.jpg" alt="fail to load" />
        </div>



      </div>

      <br />

      <div className="sep-delivery"></div>

      <div className="a-section"><h3 className='a-heading'> Description</h3>

        <div className="service-box">

          <div className="description-pp">iPhone 12. Beautifully bright 6.1-inch (15.5 cm diagonal) Super
            Retina XDR display Super Retina XDR display. Ceramic Shield
            with four times better drop performance. Incredible low-light photography
            with Night mode on all cameras. Cinema-grade Dolby Vision video recording, editing and playback.
            Powerful A14 Bionic chip. And new
            MagSafe accessories for easy attachment and faster wireless charging. Let the fun begin.</div>
        </div>



      </div>
      <div className="sep-delivery"></div>
      <br />
      <div className="sep-delivery"></div>



      <div className="a-section"><h3 className='a-heading'>Feature & Details</h3>
      <br />

      <ul className='desc-ul'>
          <li className='desc-li'> 6.1-inch (15.5 cm diagonal) Super Retina XDR display</li>
          <li className='desc-li'> Ceramic Shield, tougher than any smartphone glass</li>
          <li className='desc-li'> A14 Bionic chip, the fastest chip ever in a smartphone</li>
          <li className='desc-li'>Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; 
            Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording </li>
          <li className='desc-li'>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording </li>
          <li className='desc-li'> Industry-leading IP68 water resistance</li>
          <li className='desc-li'> Supports MagSafe accessories for easy attachment and faster wireless charging</li>
          <li className='desc-li'> iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more</li>

        </ul>



      </div>






      </div>

    </>
  )
}

export default Iphone12
