import React from 'react'

function AboutUS() {
  return (
    <div>
      
      

	<div class="contact-container">
		<div class="text-center">
			<h1>About Us</h1>
			<div>
            We Known as The Gadget Seller - Most Trusted Store of Instagram. We Sell Smartphones & Electronics Gadgets in Affordable Price Range. Since 2020 We're Regularly Delivering Products to Our Customers. Follow Instagram @the The_gadget_seller to Know More About US.
			</div>
		</div>
		<div class="contact-content">
			<div class="col-1">
				
				
				<div class="address-line instagram">
                <img className='contact-insta-img' src="./img/insta.png" alt="fail tpo load insta img" />
					<div class="contact-info">
						<div class="contact-info-title">Instagram</div>
						<a className='insta-link' href="http">The_gadget_seller</a>
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

export default AboutUS
