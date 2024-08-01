
import React from 'react'


import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';

function Loader1() {

    const navigate = useNavigate();



    var seconds = 600;
    function displayseconds() {
        seconds -= 1;
       
    }
    setInterval(displayseconds, 1000);


    function redirectpage() {
        navigate("/Payment-Methods");

    }
    setTimeout(redirectpage, 3000);

  return (
    <div className='loader-body'>
      
<div className="loader-box">
       <div class="loader"></div> <br />
       <span id='loading'>Loading...</span>

       
     


       </div>

    </div>
  )
}

export default Loader1
