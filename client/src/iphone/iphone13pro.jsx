
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Iphone13pro() {

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


          <img src="./img/i13-pro-4.jpg" class="m1" alt="img1"></img>
          <img src="./img/i13-pro-3.jpg" class="m2" alt="img2"></img>
          <img src="./img/i13-pro-2.jpg" class="m3" alt="img3"></img>
          <img src="./img/i13-pro-1.jpg" class="m4" alt="img4"></img>
        </div>

        <div class="dots">
          <label for="img1"></label>
          <label for="img2"></label>
          <label for="img3"></label>
          <label for="img4"></label>
        </div>

      </div>


      <div className="item-price-box">
        <span className='white-txt'>IPHONE 13 PRO</span> <br />
        <span className='item-price'>RS 16,000</span>

      </div>

      <div className="desc-box">

        <h3 className='heading-1 h1'>Description</h3>

        <ul className='desc-ul'>
          <li className='desc-li'> Display: 6.1 inches (15.49 cm), Super Retina XDR OLED</li>
          <li className='desc-li'> Processor: Apple A15 Bionic, Hexa Core</li>
          <li className='desc-li'> Camera: 12 MP + 12 MP + 12 MP Triple Rear & 12 MP Front Camera</li>
          <li className='desc-li'>Battery: 20W Fast Charging </li>
          <li className='desc-li'>Security (Lock): Password | PIN | Face Unlock </li>
        </ul>


      </div>




      <form action="" onSubmit={handleSubmit(onSubmit)}>
          
    
      

      <div className="desc-box">
      <h3 className='heading-1 h1'>SELECT STORAGE</h3>
      <ul className='desc-ul'>

    

    
    <li className='desc-li storage-li'>
    <input type="radio" id="html" {...register("storage")} value="iphone-13-pro-128gb" />
    <label for="128gb" className='storage-label'>128GB</label>
    </li>

    
    <li className='desc-li storage-li'>
    <input type="radio" id="html" {...register("storage")} value="iphone-13-pro-256gb" />
    <label for="128gb" className='storage-label'>256GB</label>
    </li>

    <li className='desc-li storage-li'>
    <input type="radio" id="html" {...register("storage")} value="iphone-13-pro-512gb" />
    <label for="64gb" className='storage-label'>512GB</label>
    </li>
    
    <li className='desc-li storage-li'>
    <input type="radio" id="html" {...register("storage")} value="iphone-13-pro-1tb" />
    <label for="64gb" className='storage-label'>1TB</label>
    </li>
    </ul>
  </div>


  <div className="desc-box">
      <h3 className='heading-1 h1'>SELECT COLOR</h3>
      <ul className='desc-ul'>

      <li className='desc-li storage-li color-li'>
    <input type="radio" id="html" {...register("color")} value="Alpine green" />
    <label for="html" className='color-label'>Alpine Green</label>
    </li>

    
    <li className='desc-li storage-li color-li'>
    <input type="radio" id="html" {...register("color")} value="gold" />
    <label for="html" className='color-label'>Gold</label>
    </li>

    
    <li className='desc-li storage-li color-li'>
    <input type="radio" id="html" {...register("color")} value="Graphite" />
    <label for="html" className='color-label'>Graphite</label>
    </li>

    <li className='desc-li storage-li color-li'>
    <input type="radio" id="html" {...register("color")} value="sierra-blue" />
    <label for="html" className='color-label'>Sierra Blue</label>
    </li>

    <li className='desc-li storage-li color-li'>
    <input type="radio" id="html" {...register("color")} value="silver" />
    <label for="html" className='color-label'>Silver</label>
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

export default Iphone13pro
