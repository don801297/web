
import { useState, useEffect, useRef } from 'react'

import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';




function Iphone16() {

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


                        <img src="./img/i16-1.png" class="m1" alt="img1" checked></img>
                        <img src="./img/i16-2.png" class="m2" alt="img2" ></img>
                        <img src="./img/i16-3.png" class="m3" alt="img3" ></img>
                        <img src="./img/i16-4.png" class="m4" alt="img4" ></img>
                    </div>

                    <div class="dots">
                        <label for="img1"></label>
                        <label for="img2"></label>
                        <label for="img3"></label>
                        <label for="img4"></label>
                    </div>

                </div>


                <div className="item-price-box">
                    <span className='white-txt'>APPLE IPHONE 16</span> <br />
                    <span className='item-price'>RS 16,000</span>

                </div>


                <div className="sep-delivery"></div>
                <div className="delivery-box">Free or fastest Delivery Overall India <br /> Within 3 - 4 Days</div>
                <div className="sep-delivery"></div>



                <div className="delivery-box">Storage 256GB</div>
                <div className="sep-delivery"></div>




                <div className="a-section"><h3 className='a-heading'>Select Colour</h3><br />

                    <div className="color-box1">


                        <div className="color">
                            <input type="radio" id="html" {...register("color")} value="iphone16-ultramarin" />
                            <label for="html" className='color-label'>Ultramarine</label>
                        </div>

                        <div className="color">
                            <input type="radio" id="html" {...register("color")} value="iphone16-teal" />
                            <label for="html" className='color-label'>Teal <pre>     </pre></label>
                        </div>


                    </div>


                    <div className="color-box1">




                        <div className="color">
                            <input type="radio" id="html" {...register("color")} value="iphone16-black" />
                            <label for="html" className='color-label'>Black </label>
                        </div>
                        <div className="color">
                            <input type="radio" id="html" {...register("color")} value="iphone16-Pink" />
                            <label for="html" className='color-label'>Pink</label>
                        </div>
                        <div className="color">
                            <input type="radio" id="html" {...register("color")} value="iphone16-white" />
                            <label for="html" className='color-label'>White</label>
                        </div>

                    </div>


                </div>



                <div className="sep-delivery"></div>


                <div className="a-section"><h3 className='a-heading'> Shop with confidence</h3>

                    <div className="service-box">
                        <div className="srvice1">✔ 7 days Replacement </div>
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

                    <input type="text"      {...register("ahn")} name='ahn' className="backend-product-name" value="Iphone15" />

                    <div className="btn-box"> <button className='btnn' type="submit" value="submit" >BUY NOW</button></div>





                </form>



                <div className="sep-delivery"></div>

                <div className="a-section"><h3 className='a-heading'>Product Details</h3>

                    <div className="detail-box">
                        <div className="details-bold"> Brand</div>
                        <div className="detail-text">Apple</div>
                    </div>

                    <div className="detail-box">
                        <div className="details-bold"> Operating System</div>
                        <div className="detail-text">iOS 17</div>
                    </div>



                    <div className="detail-box">
                        <div className="details-bold"> Memory Storage</div>
                        <div className="detail-text">256 GB</div>
                    </div>

                    <div className="detail-box">
                        <div className="details-bold"> Screen Size</div>
                        <div className="detail-text">6.1 Inches</div>
                    </div>

                    <div className="detail-box">
                        <div className="details-bold"> Resolution</div>
                        <div className="detail-text">4k</div>
                    </div>

                    <div className="detail-box">
                        <div className="details-bold"> Model Name</div>
                        <div className="detail-text">iPhone 16</div>
                    </div>

                    <div className="detail-box">
                        <div className="details-bold"> Cellular Technology</div>
                        <div className="detail-text">5G</div>
                    </div>

                    <div className="detail-box">
                        <div className="details-bold"> Connectivity Technology</div>
                        <div className="detail-text">Wi-Fi Bluetooth</div>
                    </div>




                </div>




                <div className="sep-delivery"></div>


                <div className="a-section"><h3 className='a-heading'>Whats in the Box?</h3><br />

                    <span>* iPhone 16 with iOS 17,  USB-Cable</span>


                </div>




                <div className="sep-delivery"></div>

                <div className="manufacture"><h3 className='manufacture-h'>Form the manufacturer</h3><br />

                    <div className="pro-bg-box">
                        <img src="./img/i16-bg1.jpg" alt="fail to load" />
                    </div>
                    <div className="pro-bg-box">
                        <img src="./img/i16-bg2.jpg" alt="fail to load" />
                    </div>
                    <div className="pro-bg-box">
                        <img src="./img/i16-bg3.jpg" alt="fail to load" />
                    </div>

                    <div className="pro-bg-box">
                        <img src="./img/i16-bg4.jpg" alt="fail to load" />
                    </div>
                    <div className="pro-bg-box">
                        <img src="./img/i16-bg5.jpg" alt="fail to load" />
                    </div>
                    <div className="pro-bg-box">
                        <img src="./img/i16-bg6.jpg" alt="fail to load" />
                    </div>

                    <div className="pro-bg-box">
                        <img src="./img/i16-bg7.jpg" alt="fail to load" />
                    </div>




                </div>

                <br />

                <div className="sep-delivery"></div>

                <div className="a-section"><h3 className='a-heading'> Description</h3>

                    <div className="service-box">

                        <div className="description-pp">iPhone 16. Built for Apple Intelligence. Featuring
                            Camera Control. 48MP Fusion camera. Five vibrant colours. And A18 chip.</div>
                    </div>



                </div>
                <div className="sep-delivery"></div>




                <div className="a-section"><h3 className='a-heading'>Feature & Details</h3>
                    <br />

                    <ul className='desc-ul'>
                        <li className='desc-li'> BUILT FOR APPLE INTELLIGENCE — Apple Intelligence is the personal intelligence system that helps you write, express yourself and get things done effortlessly. With groundbreaking privacy 
                            protections, it gives you peace of mind that no one else can access your data — not even Apple.</li>


                        <li className='desc-li'> TAKE TOTAL CAMERA CONTROL — Camera Control gives you an easier way to quickly access camera tools, 
                            like zoom or depth of field, so you can take the perfect shot in record time.</li>


                        <li className='desc-li'> GET FURTHER AND CLOSER — The improved Ultra Wide camera with autofocus lets you take incredibly detailed macro photos and videos. Use the 48MP Fusion camera 
                            for stunning high-resolution images, and zoom in with the 2x optical-quality Telephoto.</li>


                        <li className='desc-li'>PHOTOGRAPHIC STYLES — The latest-generation Photographic Styles give you greater creative flexibility, so you can make
                             every photo even more you. And you can reverse any of those styles anytime you want. </li>


                        <li className='desc-li'>SUPER-SMART A18 CHIP — A18 jumps two generations ahead of the A16 Bionic chip in iPhone 15. It enables Apple Intelligence, powers advanced photo
                             and video features, and supports console-level gaming, with exceptional power efficiency.</li>


                             <li className='desc-li'>LONGER BATTERY LIFE — iPhone 16 works together with the A18 chip to deliver a big boost in battery life with up to 22 hours video playback.
                                 Charge via USB-C or snap on a MagSafe charger for faster wireless charging.</li>

                             <li className='desc-li'>DESIGNED TO LAST — iPhone 16 has a sturdy, aerospace-grade aluminium design with a 15.54 cm (6.1″) Super Retina XDR display. It’s remarkably durable with the 
                                latest-generation Ceramic Shield material that’s 2x tougher than any smartphone glass.</li>

                             <li className='desc-li'>CUSTOMISE YOUR IPHONE — With iOS 18, you can tint your Home Screen icons with any colour. Find your favourite shots faster in the redesigned Photos app. And add
                                 playful, animated effects to any word, phrase or emoji in Messages.</li>

                    </ul>



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


            </div>





        </>
    )
}

export default Iphone16
