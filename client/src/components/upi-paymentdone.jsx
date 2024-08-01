import React from 'react'


import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';



function Upipayment() {
    const navigate = useNavigate();



    var seconds = 600;
    function displayseconds() {
        seconds -= 1;
        document.getElementById("secondsdisplay").innerText = "this payment page will automatically expire in " + seconds + " seconds ...";
    }
    setInterval(displayseconds, 1000);


    function redirectpage() {
        navigate("/");

    }
    setTimeout(redirectpage, 6000000);



    return (
        <div className='upi-body'>


            <div className="upi-box">
                <div className="upi-logo"><img src="./img/upi-logo.webp" alt="fail to load" className='upi-logo-img' />

                    <span className='upi-span'>Payment</span></div>

                <div className="sep-line"></div>
                <img src="./img/upii2.jpeg" alt="fail to load" class="upi-body-img" />



                <div className="upi-payment-step">
                    <div className="upi-icon2"><i class="fa-solid fa-circle-right"></i></div>

                    <div className="upi-heading2"><b>Copy</b> Bank Details or UPI ID <b>Open</b> your <br /> payment App Tap To Transfer Money</div>
                </div>

                <div className="upi-payment-step">
                    <div className="upi-icon2"><i class="fa-solid fa-indian-rupee-sign"></i></div>

                    <div className="upi-heading2"><b>Complete</b> the payment by selecting the   <br />bank or UPI ID payment Transfer </div>
                </div>

                <div className="upi-payment-step">
                    <div className="upi-icon2"><i class="fa-solid fa-circle-check"></i></div>

                    <div className="upi-heading2"><b>Send</b> payment Done Confarmation <br /> Screenshot on whatsapp for further Details <br /> and order information</div>
                </div>


                <div className="upi-payment-step">
                    <div className="upi-icon2"><i class="fa-solid fa-circle-exclamation"></i></div>

                    <div className="upi-heading2">Thank you for your Trust. we will be in contact with  more details shortly..</div>
                </div>




                <div className="upi-payment-note">
                <i class="fa-solid fa-bell"></i>


                    <p className='upi-note-p1'>NOTE <br />
                        Send Payment Done Screenshot ON Whatsapp For Order Information and Further Details
                    </p>

                </div>

                <div className="sep-line sep2"></div>


                <p className='upi-note-p2' id='secondsdisplay'>


                </p>



            </div>







        </div>
    )
}

export default Upipayment
