
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Iphone14plus() {

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


          <img src="./img/i14-2.png" class="m1" alt="img1"></img>
          <img src="./img/i14-3.jpg" class="m2" alt="img2"></img>
          <img src="./img/i14-4.jpg" class="m3" alt="img3"></img>
          <img src="./img/i14-1.png" class="m4" alt="img4"></img>
        </div>

        <div class="dots">
          <label for="img1"></label>
          <label for="img2"></label>
          <label for="img3"></label>
          <label for="img4"></label>
        </div>

      </div>


      <div className="item-price-box">
        <span className='white-txt'>IPHONE 14 PLUS</span> <br />
        <span className='item-price'>RS 18,000</span>

      </div>

      <div className="desc-box">

        <h3 className='heading-1 h1'>Description</h3>

        <ul className='desc-ul'>
          <li className='desc-li'> Display: 6.7 inches (16.95 cm) OLED Display</li>
          <li className='desc-li'> Processor: A15 Bionic Chip, Hexa Core</li>
          <li className='desc-li'> Camera: 12 MP + 12 MP Dual Rear & 12 MP Front Camera</li>
          <li className='desc-li'>Battery: Qi Wireless Charging Up to 7.5W </li>
          <li className='desc-li'>Security (Lock): Facial Lock </li>
        </ul>


      </div>




      <form action="" onSubmit={handleSubmit(onSubmit)}>
          
    
      

      <div className="desc-box">
      <h3 className='heading-1 h1'>SELECT STORAGE</h3>
      <ul className='desc-ul'>

   

    
    <li className='desc-li storage-li'>
    <input type="radio" id="html" {...register("storage")} value="iphone-14plus-128gb" />
    <label for="128gb" className='storage-label'>128GB</label>
    </li>

    
    <li className='desc-li storage-li'>
    <input type="radio" id="html" {...register("storage")} value="iphone-14plus-256gb" />
    <label for="128gb" className='storage-label'>256GB</label>
    </li>

    <li className='desc-li storage-li'>
    <input type="radio" id="html" {...register("storage")} value="iphone-14plus-512gb" />
    <label for="64gb" className='storage-label'>512GB</label>
    </li>
    
    </ul>
  </div>


  <div className="desc-box">
      <h3 className='heading-1 h1'>SELECT COLOR</h3>
      <ul className='desc-ul'>

      <li className='desc-li storage-li color-li'>
    <input type="radio" id="html" {...register("color")} value="blue" />
    <label for="html" className='color-label'>BLUE</label>
    </li>

    
    <li className='desc-li storage-li color-li'>
    <input type="radio" id="html" {...register("color")} value="midnight" />
    <label for="html" className='color-label'>MIDNIGHT</label>
    </li>

    
    <li className='desc-li storage-li color-li'>
    <input type="radio" id="html" {...register("color")} value="purple" />
    <label for="html" className='color-label'>PURPLE</label>
    </li>

    <li className='desc-li storage-li color-li'>
    <input type="radio" id="html" {...register("color")} value="starlight" />
    <label for="html" className='color-label'>STARLIGHT</label>
    </li>

    <li className='desc-li storage-li color-li'>
    <input type="radio" id="html" {...register("color")} value="red" />
    <label for="html" className='color-label'>RED</label>
    </li>

    <li className='desc-li storage-li color-li'>
    <input type="radio" id="html" {...register("color")} value="yellow" />
    <label for="html" className='color-label'>YELLOW</label>
    </li>
    </ul>
  </div>


                   <div className="buy-btn-box">
                <button  type="submit" value="submit"  className="buy-btn">
                      BUY
                        
                    </button>
                    </div> 





        </form>

    </>
  )
}

export default Iphone14plus
