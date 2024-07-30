import React from 'react'


import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';



function Upipayment() {
    const navigate = useNavigate();

   

var seconds=600;
  function displayseconds (){
    seconds -=1;
document.getElementById( "secondsdisplay").innerText="this payment page will automatically expire in "+seconds+" seconds ...";
}
setInterval (displayseconds,1000) ;
    

  function redirectpage ()
  {
    navigate("/");
    
  }
  setTimeout( redirectpage ,600000);
 
   

    return (
        <div className='upi-body'>


            <div className="upi-box">
                <div className="upi-logo"><img src="./img/upi-logo.webp" alt="fail to load" className='upi-logo-img' />

                    <span className='upi-span'>Payment</span></div>

                <div className="sep-line"></div>
                <img src="./img/upii.jpg" alt="fail to load" class="upi-body-img" />



                <div className="upi-payment-note">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>


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
