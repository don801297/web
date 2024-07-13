import React from 'react'

function Paymentfail() {
    return (
        <div>


            <div class="pay-container">
                



                <div class="row justify-content-center">
                    <div class="col-md-5">
                        <div class="message-box _success _failed">
                            <i class="fa fa-times-circle" aria-hidden="true"></i>
                            <img src="./img/pay-fail.jfif" alt="fail to load" class="fa fa-check-circle pay-done" />
                            <h2> Your payment failed </h2>
                            <p>  Try again later </p>

                        </div>
                    </div>
                </div>

            </div>


            <p className='pay-note'>NOTE <br /> If you facing any other issue then Message to your admin on Whatsapp</p>

        </div> 
           

          
        
    )
}

export default Paymentfail
