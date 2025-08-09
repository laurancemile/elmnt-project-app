import styled from "styled-components";
import { useForm } from "react-hook-form";
import { HiPhone } from "react-icons/hi2";
import { HiMiniEnvelope } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Logo from "../ui/Logo";
import CallToActionButton from "../ui/CallToActionButton";
import ServiceList from "../ui/services/ServiceList";
import GalleryList from "../ui/gallery/GalleryList";

function Homepage() {
	const { register, handleSubmit } = useForm();
	const [scrollOpacity, setScrollOpacity] = useState(0);

	function onSubmit(data) {
		console.log(data);
	}

	function handleButtonClick() {
		console.log("clicked");
	}

	useEffect(() => {
		const handleScroll = () => {
			// Calculate opacity based on scroll position (0 to 1)
			const heroHeight = document.querySelector("#hero").offsetHeight;
			const scrollY = window.scrollY;
			let opacity = scrollY / heroHeight;
			if (opacity > 1) opacity = 1;
			setScrollOpacity(opacity);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<>
			{/* ------------ Header Start ------------ */}
			<HeaderSection className="homepage__header">
				<Logo />
				<SiteTitle>Elmnt.</SiteTitle>
				<Subheading>Fuel your fire!</Subheading>
				<NavMenu>
					<ul className="nav__list">
						<li className="nav__item">
							<NavLink className="nav__link" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav__item">
							<NavLink className="nav__link" to="/about">
								About
							</NavLink>
						</li>
						{/* <li className="nav__item">
							<a className="nav__link" href="#shop">
								Shop
							</a>
						</li> */}
					</ul>
				</NavMenu>
			</HeaderSection>
			{/* ------------ Header End ------------ */}

			{/* ------------ Hero Start ------------ */}
			<HeroSection id="hero">
				<Overlay style={{ opacity: scrollOpacity }} />
				<HeroContent>
					<HeroTitle>
						Get in the <span className="groove">groove</span>
					</HeroTitle>
					<HeroText>Exercise your mind and body!</HeroText>
					<CallToActionButton>Join now</CallToActionButton>
				</HeroContent>
			</HeroSection>
			{/* ------------ Hero End ------------ */}

			{/* ------------ Service Start ------------ */}
			<ServiceList />
			{/* ------------ Service End ------------ */}

			{/* ------------ About Start ------------ */}
			<AboutSection>
				<ContentWrapper className="container">
					<AboutText>
						<AboutHeading>About Us</AboutHeading>
						<AboutDescription>
							<strong>ELMNT.</strong> is a newly established health and gym
							lifestyle company dedicated to making life easier for individuals
							seeking to elevate their well-being and self-improvement. Our
							vision is to create a supportive community that fosters commitment
							and motivation, empowering like-minded individuals to achieve
							their health and lifestyle goals.
						</AboutDescription>
						<CallToActionButton>Join Now</CallToActionButton>
					</AboutText>

					<ImageWrapper>
						<img
							src="https://images.unsplash.com/photo-1709315849916-bcd31d054deb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Group exercising"
						/>
					</ImageWrapper>
				</ContentWrapper>
			</AboutSection>
			{/* ------------ About End ------------ */}

			{/* ------------ Gallery Start ------------ */}
			<GallerySection aria-labelledby="gallery-heading" className="container">
				<GalleryHeading id="gallery-heading">Our Gallery</GalleryHeading>
				<GalleryList />
			</GallerySection>
			{/* ------------ Gallery End ------------ */}

			{/* ------------ Contact Start ------------ */}
			<ContactUsSection aria-labelledby="contact-heading">
				<ContactLeft>
					<ContactHeading id="contact-heading">Contact Us</ContactHeading>
					<ContactForm>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Your name"
							required
						/>

						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Your email"
							required
						/>

						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							placeholder="Your message"
							rows="4"
							required
						/>

						<CallToActionButton>Submit</CallToActionButton>
					</ContactForm>
				</ContactLeft>

				<ContactRight>
					<img
						src="https://images.unsplash.com/photo-1584670508996-c3144057a8d0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Team collaboration at workspace"
					/>
				</ContactRight>
			</ContactUsSection>
			{/* ------------ Contact End ------------ */}

			{/* ------------ Footer Start ------------ */}
			<FooterSection>
				<NewsletterTitle>Join the Newsletter</NewsletterTitle>

				<FooterForm onSubmit={handleSubmit(onSubmit)}>
					<EmailInput
						type="email"
						placeholder="Enter your email"
						{...register("email")}
					/>

					<ContactInfo>
						<p>
							<HiPhone />
							<span>
								<a href="tel:+000000000000">0000-0000-0000</a>
							</span>
						</p>

						<SocialIcons>
							<HiMiniEnvelope />
							<HiMiniEnvelope />
							<HiMiniEnvelope />
						</SocialIcons>
					</ContactInfo>

					<CallToActionButton type="submit">Subscribe</CallToActionButton>
				</FooterForm>

				<FooterCopyright>
					&copy; {new Date().getFullYear()} &middot; ELMNT
				</FooterCopyright>
			</FooterSection>
			{/* ------------ Footer End ------------ */}

			<button onClick={handleButtonClick} aria-disabled="true">
				Test
			</button>
		</>
	);
}

// Styled Components
// -------------- Header -------------- //
const HeaderSection = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 4.8rem;
`;

const SiteTitle = styled.h1`
	font-size: 4.8rem;
	margin-bottom: 0.2rem;
	margin-top: -2rem;
	letter-spacing: 1px;
	text-transform: uppercase;
`;

const Subheading = styled.p`
	font-size: 1.4rem;
	line-height: 1.5;
	margin-bottom: 4.8rem;
	text-transform: uppercase;
`;

const NavMenu = styled.nav`
	.nav__list {
		display: flex;
		gap: 2.4rem;
		padding: 0;
		margin: 0;
	}

	.nav__item {
		list-style: none;
		font-weight: 600;
	}

	.nav__item:hover {
		color: var(--secondary-color);
	}

	.nav__link {
		color: currentColor;
		text-decoration: none;
		font-size: 1.4rem;
		text-transform: uppercase;
	}
`;

// -------------- Hero -------------- //
const HeroSection = styled.section`
	background: url("https://images.unsplash.com/photo-1625151936268-e1ffba534f20?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
		fixed repeat 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: #fff;
	position: relative;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.6);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	pointer-events: none;
	transition: opacity 0.2s ease-out;
	opacity: 0;
`;

const HeroContent = styled.div`
	color: white;
	text-align: center;
	z-index: 1;
`;

const HeroTitle = styled.h2`
	font-size: 8.6rem;
	line-height: 1.2;
	margin-bottom: 1.2rem;

	.groove {
		font-style: italic;
	}
`;

const HeroText = styled.p`
	font-size: 1.8rem;
	line-height: 1.5;
	margin-bottom: 6.4rem;
`;

// -------------- About -------------- //
const AboutSection = styled.section`
	background: url("https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
		no-repeat;

	color: #fff;
	padding: 6.4rem 0;
	display: flex;
`;

const ContentWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-items: center;
	align-items: center;
`;

const AboutText = styled.div`
	flex: 1;
`;

const AboutHeading = styled.h3`
	font-size: 2.8rem;
	margin-bottom: 1.6rem;
	text-transform: uppercase;
`;

const AboutDescription = styled.p`
	font-size: 1.6rem;
	line-height: 1.6;
	margin-bottom: 6.4rem;
`;

const ImageWrapper = styled.div`
	border: 4px solid var(--secondary-color);

	img {
		width: 400px;
		height: 400px;
		object-fit: cover;
		border-radius: 3px;
	}
`;

// -------------- Gallery -------------- //
const GallerySection = styled.section`
	margin-top: 9.6rem;
	margin-bottom: 9.6rem;
`;

const GalleryHeading = styled.h2`
	margin-bottom: 4.8rem;
	font-size: 3.2rem;
`;

// -------------- Contact --------------//
const ContactUsSection = styled.section`
	padding: 6.4rem 12.6rem;
	background-color: var(--primary-color);
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: center;
`;

const ContactLeft = styled.div`
	background-color: #fff;
	height: 460px;
	padding: 3.2rem;
`;

const ContactRight = styled.div`
	height: 460px;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 2px;
	}
`;

const ContactHeading = styled.h2`
	font-size: 2.8rem;
	margin-bottom: 2.4rem;
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	padding: 1.2rem;

	input,
	textarea {
		padding: 1.6rem;
		font-size: 1rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
`;

const SubmitButton = styled.button`
	padding: 1rem 2rem;
	background-color: #222;
	color: #fff;
	border: none;
	cursor: pointer;
	border-radius: 4px;

	&:hover {
		background-color: #444;
	}
`;

// -------------- Footer --------------//
const FooterSection = styled.footer`
	color: #000;
	padding: 8rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const NewsletterTitle = styled.p`
	font-size: 2rem;
	font-weight: bold;
	margin-bottom: 2rem;
	text-transform: uppercase;
	color: var(--primary-color);
`;

const FooterForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
	max-width: 500px;
`;

const EmailInput = styled.input`
	padding: 1rem;
	font-size: 1.4rem;
	border-radius: 0px;
	border: none;
	border-bottom: 2px solid black;
`;

const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;
	margin-top: 4.8rem;
	margin-bottom: 1.8rem;

	p {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		font-size: 1.4rem;

		a {
			color: var(--primary-color);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

const SocialIcons = styled.div`
	display: flex;
	justify-content: center;
	gap: 1.6rem;
	font-size: 2rem;

	svg {
		cursor: pointer;

		&:hover {
			color: #ff5722;
		}
	}
`;

const FooterCopyright = styled.p`
	margin-top: 3rem;
	font-size: 1.2rem;
	color: #aaa;
`;

export default Homepage;
