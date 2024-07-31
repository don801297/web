
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Watch2() {

    const [value, setValue] = useState()
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
        navigate("/adress")
        let r = await fetch(import.meta.env.VITE_MONGO, {
            method: "POST", headers: {
                "Content-Type": "application/json",
            }, body: JSON.stringify(data)


        })
        let res = await r.text()

        console.log(data, res)


    }


    function showSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'flex'
    }
    function hideSidebar() {
        const sidebar = document.querySelector('.sidebar')
        sidebar.style.display = 'none'
    }




    return (
        <>


            <div className="i12-body">



                <div className="navbar">
                    <div className="logo">
                        <img className="nav-img" src="./img/navlogo2.png" alt="fail img to load net banking" />
                        <p className='phone-shop'>Phone Shop</p>
                    </div>

                    <div>
                        <nav>
                            <ul className='sidebar'>
                                <li onClick={hideSidebar}> <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#fc3746"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                                </a></li>
                                <li><a href="/Home">Home</a></li>
                                <li><a href="/">Products</a></li>
                                <li><a href="/aboutUS">About</a></li>
                                <li><a href="contact">Contact</a></li>
                                <li><a href="contact">Help</a></li>
                            </ul>

                            <ul>

                                <li class="hideOnMobile"><a href="/Home">Home</a></li>
                                <li class="hideOnMobile"><a href="/">Products</a></li>
                                <li class="hideOnMobile"><a href="/aboutUS">About</a></li>
                                <li class="hideOnMobile"><a href="/contact">Contact</a></li>
                                <li class="hideOnMobile"><a href="contactUS">Help</a></li>
                                <li class="menu-button" onClick={showSidebar}> <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg></a></li>
                            </ul>
                        </nav>
                    </div>

                </div>




                <div className="slider">

                    <div className="images">
                        <input type="radio" name="slide" id="img1" />
                        <input type="radio" name="slide" id="img2" />
                        <input type="radio" name="slide" id="img3" />
                        <input type="radio" name="slide" id="img4" />


                        <img src="./img/Watch3-1.webp" class="m1" alt="img1" checked></img>
                        <img src="./img/Watch3-2.webp" class="m2" alt="img2" ></img>
                        <img src="./img/Watch3-3.webp" class="m3" alt="img3" ></img>
                        <img src="./img/Watch3-1.webp" class="m4" alt="img4" ></img>
                    </div>

                    <div class="dots">
                        <label for="img1"></label>
                        <label for="img2"></label>
                        <label for="img3"></label>
                        <label for="img4"></label>
                    </div>

                </div>


                <div className="item-price-box">
                    <span className='white-txt'>Sunway M3 LED Digital Watch</span> <br />
                    <span className='item-price'>RS 130</span>

                </div>


                <div className="sep-delivery"></div>
                <div className="delivery-box">Free or fastest Delivery Overall India <br /> Within 3 - 4 Days</div>
                <div className="sep-delivery"></div>



                <div className="a-section"><h3 className='a-heading'> Shop with confidence</h3>

                    <div className="service-box">
                        <div className="srvice1">✔ 24x7 Customer Support  </div>
                        <div className="srvice1">✔ Free Delivery</div>
                    </div>

                    <div className="service-box">
                        <div className="srvice1">✔ 1 Year Warranty</div>
                        <div className="srvice1">✔ Top Brand</div>
                    </div>
                    <div className="service-box">
                        <div className="srvice1">✔ Fastese Delivery</div>
                        <div className="srvice1">✔ Secure transaction</div>
                    </div>

                </div>




                <form action="" onSubmit={handleSubmit(onSubmit)}>

                    <div className="btn-box"> <button className='btnn' type="submit" value="submit" >BUY NOW</button></div>





                </form>



                <div className="sep-delivery"></div>

                <div className="a-section"><h3 className='a-heading'>Product Details</h3>

                    <div className="detail-box">
                        <div className="details-bold"> Brand</div>
                        <div className="detail-text">Sunway</div>
                    </div>

                    <div className="detail-box">
                        <div className="details-bold"> colour</div>
                        <div className="detail-text">Black</div>
                    </div>

                    <div className="detail-box">
                        <div className="details-bold"> Display Type</div>
                        <div className="detail-text">Digital</div>
                    </div>

                    <div className="detail-box">
                        <div className="details-bold"> Batteries Avg. Life</div>
                        <div className="detail-text">3 Month</div>
                    </div>

                    <div className="detail-box">
                        <div className="details-bold"> Manufacturer</div>
                        <div className="detail-text">sunway</div>
                    </div>

                    <div className="detail-box">
                        <div className="details-bold"> weight </div>
                        <div className="detail-text">60 g</div>
                    </div>




                </div>




                <div className="sep-delivery"></div>


                <div className="a-section"><h3 className='a-heading'>Whats in the Box?</h3><br />

                    <span>Sunway Digital watch</span>


                </div>


                <div className="sep-delivery"></div>

                <div className="sep-delivery"></div>

                <div className="manufacture"><h3 className='manufacture-h'>Form the manufacturer</h3><br />

                    <div className="pro-bg-box">
                        <img src="./img/Watch3-1.webp" alt="fail to load" />
                    </div>
                    <div className="pro-bg-box">
                        <img src="./img/Watch3-2.webp" alt="fail to load" />
                    </div>
                    <div className="pro-bg-box">
                        <img src="./img/Watch3-3.webp" alt="fail to load" />
                    </div>




                </div>

                <br />

                <div className="sep-delivery"></div>



                <div className="sep-delivery"></div>



                <div className="a-section"><h3 className='a-heading'> Description</h3>

<div className="service-box">

  <div className="description-pp">It can be used on a regular basis . It is easy to maintain .</div>
</div>



</div>



                <div className="seprator"></div>

                <div className="footer">
                    <div className="copyright">
                        <p>Copyright © 2024 Phone Shop | Powered by Gadget Seller</p>
                    </div>

                    <ul className='footer-ul'>
                        <li className='footer-li'>  <a href="/Home">HOME </a></li>
                        <li className='footer-li'><a href="/">SHOP </a></li>
                        <li className='footer-li'><a href="/aboutUS">ABOUT </a></li>
                        <li className='footer-li'><a href="/contact">CONTACT</a></li>
                    </ul>


                </div>


            </div >





        </>
    )
}

export default Watch2
