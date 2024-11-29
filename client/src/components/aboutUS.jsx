import React from 'react'

function AboutUS() {
	return (
		<div className='contact-body'>



			<div class="contact-container">
				<div class="text-center">
					<h1>About Us</h1>
					<div>
						We Known as The Gadget Seller - Most Trusted Store of Instagram.
						 We Sell Smartphones & Electronics Gadgets in Affordable Price Range.
						  Since 2020 We're Regularly Delivering Products to Our Customers.
						   Follow Me on Instagram @The_gadget_sellers to Know More About US.
					</div>
				</div>
				<div class="contact-content">
					<div class="col-1">


						<div class="address-line instagram">
							<i class="fa-brands fa-instagram"></i>
							<div class="contact-info">



								<a className='insta-link' href="https://instagram.com/the_gadget_sellers"><button className='insta-btn'>Follow </button></a>
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



		</div>
	)
}

export default AboutUS
