import React from 'react'

function Contact() {
  return (
    <div className='contact-body'>
      
      

	<div class="contact-container">
		<div class="text-center">
			<h1>Contact Us</h1>
			<div>
			We Known as The Gadget Seller - Most Trusted Store of Instagram. We Sell Smartphones & Electronics Gadgets in Affordable Price Range. Since 2020 We're Regularly Delivering Products to Our Customers. Follow Instagram @the The_gadget_seller to Know More About US.
			</div>
		</div>
		<div class="contact-content">
			<div class="col-1">
				<div class="address-line">
                <svg className='contact-svg' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-114.86-73.36-188.1-73.36-73.23-179.97-73.23T300.03-740.1q-73.36 73.24-73.36 188.1 0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
					<div class="contact-info">
						<div class="contact-info-title">Address</div>
						<div>Mumbai,</div>
						<div>Maharastra,</div>
						<div>India</div>
					</div>
				</div>
				<div class="address-line">
                <svg className='contact-svg' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M266.67-40q-27 0-46.84-19.83Q200-79.67 200-106.67v-746.66q0-27 19.83-46.84Q239.67-920 266.67-920h426.66q27 0 46.84 19.83Q760-880.33 760-853.33v746.66q0 27-19.83 46.84Q720.33-40 693.33-40H266.67Zm0-100v33.33h426.66V-140H266.67Zm0-66.67h426.66v-546.66H266.67v546.66Zm0-613.33h426.66v-33.33H266.67V-820Zm0 0v-33.33V-820Zm0 680v33.33V-140Z"/></svg>
					<div class="contact-info">
						<div class="contact-info-title">Phone</div>
						<div>123-1234-123.</div>
					</div>
				</div>
				<div class="address-line">
                <svg  className='contact-svg' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z"/></svg>
					<div class="contact-info">
						<div class="contact-info-title">Email</div>
						<div>PhoneShope@gmail.com</div>
					</div>
				</div>
			</div>
			<div class="col-2">
				<form>
					<div class="form-container">
						<h2>Send Message</h2>
						<div class="form-row">
							<label>Full Name</label>
							<div>
								<input type="text" class="form-field"/>
							</div>
						</div>
						<div class="form-row">
							<label>Email</label>
							<div>
								<input type="text"  class="form-field"/>
							</div>
						</div>
						<div class="form-row">
							<label>Type your message...</label>
							<div>
                            <input type="text" class="form-field"/>
							</div>
						</div>
						<button type="send" class="adress-btn "  value="Send">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>



    </div>
  )
}

export default Contact
