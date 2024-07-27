import React from 'react'

function Upipayment() {

    function countdown( elementName, minutes, seconds )
    {
        var element, endTime, hours, mins, msLeft, time;
    
        function twoDigits( n )
        {
            return (n <= 9 ? "0" + n : n);
        }
    
        function updateTimer()
        {
            msLeft = endTime - (+new Date);
            if ( msLeft < 1000 ) {
                element.innerHTML = "Time is up!";
            } else {
                time = new Date( msLeft );
                hours = time.getUTCHours();
                mins = time.getUTCMinutes();
                element.innerHTML = (hours ? hours + ':' + twoDigits( mins ) : mins) + ':' + twoDigits( time.getUTCSeconds() );
                setTimeout( updateTimer, time.getUTCMilliseconds() + 500 );
            }
        }
    
        element = document.getElementById( elementName );
        endTime = (+new Date) + 1000 * (60*minutes + seconds) + 500;
        updateTimer();
    }
    
    

   


    return (
        <div className='upi-body'>


            <div className="upi-box">
                <div className="upi-logo"><img src="./img/upi-logo.webp" alt="fail to load" className='upi-logo-img' />

                    <span className='upi-span'>Payment</span></div>

                <div className="sep-line"></div>
                <img src="./img/Upii.jpg" alt="fail to load" class="upi-body-img" />



                <div className="upi-payment-note">
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>


                    <p className='upi-note-p1'>NOTE <br />
                        Send Payment Done Screenshot ON Whatsapp For Order Information and Further Details
                    </p>

                </div>

                <div className="sep-line sep2"></div>


                <p className='upi-note-p2'>
                    This page will automatically expire in 10 mins.
                        
                    </p>

                    
                    
                    </div>
                    
                   
            

            


        </div>
    )
}

export default Upipayment
