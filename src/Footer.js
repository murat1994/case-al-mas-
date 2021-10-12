import React, { useState } from 'react';
import './Footer.css';
import {
	AiOutlineFacebook,
	AiOutlineInstagram,
	AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
	const [placeHolder, setPlaceHolder] = useState(
		'Enter your email address...',
	);
	const [email, setEmail] = useState('');

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const keepInTouch = (e) => {
		e.preventDefault();
		if (email !== '') {
			setEmail('');
			setPlaceHolder('Your email address is saved...');
		}
	};

	return (
		<div>
			<div className="keepintouch-sm">
				<div id="keepintouch">
					<h1 className="footer-title">Keep In Touch</h1>
					{placeHolder === 'Enter your email address...' ? (
						<form id="form-keepintouch" onSubmit={keepInTouch}>
							<input
								id="input-keepintouch"
								type="email"
								placeholder={placeHolder}
								onChange={handleEmail}
								value={email}
							/>
						</form>
					) : (
						<form id="form-keepintouch" onSubmit={keepInTouch}>
							<input
								id="input-keepintouch-saved"
								type="email"
								placeholder={placeHolder}
								onChange={handleEmail}
								value={email}
							/>
						</form>
					)}
				</div>
				<div id="social-media">
					<h1 className="footer-title">Let's Socialize</h1>
					<div className="sm-icons">
						<a
							href="https://www.facebook.com/"
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineFacebook className="footer-sm-icon" />
						</a>
						<a
							href="https://www.instagram.com/"
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineInstagram className="footer-sm-icon" />
						</a>
						<a
							href="https://twitter.com/home"
							target="_blank"
							rel="noreferrer"
						>
							<AiFillTwitterCircle className="footer-sm-icon" />
						</a>
					</div>
				</div>
			</div>
			<div id="nav-footer">
				<nav>
					<ul>
					<li> 
						N A L A <br/>
							<a href="/Legals">2464 Royal Ln undefined Mesa, <br/> New Jersey 45463 United States</a>
							<br/>
							<a href="/Home">(208) 555-0112</a>
							<br/>
							<a href="/About Us">nevaeh.simmons@example.com</a>
							
						</li>
						<li>
							<a href="/Legals" style={{color:"#193441"}}>Legals </a> 
							<br/>
							<a href="/Home">Home</a>
							<br/>
							<a href="/About Us">About Us</a>
							<br/>
							<a href="/Contacts">Contacts</a>
							<br/>
							<a href="/License">License</a>
						</li>
						<li>
							<a href="/Products" style={{color:"#193441"}}>Products</a>
						<br/>
							<a href="/Design Kit">Design Kit</a>
							<br/>
							<a href="/Components">Components</a>
							<br/>
							<a href="/Elements">Elements</a>
							<br/>
							<a href="/Illustrations">Illustrations</a>
						</li>
						<li>
							<a href="/Site Map" style={{color:"#193441"}}>Site Map</a>
						<br/>
							<a href="/Icons">Icons</a>
							<br/>
							<a href="/Photos">Photos</a>
							<br/>
							<a href="/Templates ">Templates </a>
							<br/>
							<a href="/Fonts">Fonts</a>
						</li>
						<li>
							<a href="/Social Media" style={{color:"#193441"}}>Social Media</a>
						<br/>
							<a href="/Facebook">Facebook</a>
							<br/>
							<a href="/Tweeter">Tweeter</a>
							<br/>
							<a href="/Instagram ">Instagram </a>
							<br/>
							<a href="/Linkeidin">Linkeidin</a>
						</li>
						<hr/>
						<li>2021 &copy; NALA</li>
						<li>Legals | Term & Conditions | License</li>
						

					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Footer;