
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Adress() {
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
        navigate("/Upi-Payment-Option")
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

<div className="adress-body">



 <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div class="container">
                <h1 className='adress-h1'>Shipping Adress</h1>
                <p className='adress-p'>Please enter your shipping details.</p>
                <hr />
                <div class="form">

                    <div class="fields fields--2">
                        <label class="field">
                            <span class="field__label" for="firstname">First name</span>
                            <input class="field__input" type="text" id="firstname"   {...register("fname")} name='fname' required/>
                        </label>
                        <label class="field">
                            <span class="field__label" for="lastname">Last name</span>
                            <input class="field__input" type="text" id="lastname"  {...register("lname")} name='lname' required/>
                        </label>
                    </div>
                    
                    <label class="field">
                        <span class="field__label" for="address">Street Adress</span>
                        <input class="field__input" type="text" id="address" {...register("adress")} name='adress'required/>
                    </label>
                    <label class="field">
                        <span class="field__label" for="address">ZIP CODE</span>
                        <input class="field__input" type="number" id="address" {...register("zcode")} name='zcode'   required />
                    </label>
                    <label class="field">
                        <span class="field__label" for="address">CITY</span>
                        <input class="field__input" type="text" id="address" {...register("city")} name='city'    required/>
                    </label>
                    <label class="field">
                        <span class="field__label" for="address">STATE</span>
                        <input class="field__input" type="text" id="address" {...register("state")} name='state'   required />
                    </label>
                    <label class="field">
                        <span class="field__label" for="address">Email</span>
                        <input class="field__input" type="email" id="address" {...register("email")} name='email'   required />
                    </label>
                    <label class="field">
                        <span class="field__label" for="address">Phone Number</span>
                        <input class="field__input" type="number" id="address" {...register("number")} name='number'  required  />
                    </label>
                  
                </div>

                <button class="adress-btn"  type="submit" value="submit">Continue</button>
            </div>

            </form>


            </div>
        </>
    )
}

export default Adress
