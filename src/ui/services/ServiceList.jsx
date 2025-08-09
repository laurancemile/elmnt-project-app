import styled from "styled-components";
import ServiceItem from "./ServiceItem";
import CallToActionButton from "../CallToActionButton";

const services = [
	{
		id: 1,
		heading: "Yoga",
		image:
			"https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1520&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		heading: "Weightlifting",
		image:
			"https://images.unsplash.com/photo-1674834726923-3ba828d37846?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 3,
		heading: "Educational Resources",
		image:
			"https://plus.unsplash.com/premium_photo-1726618574519-2f03921a61d2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
];

function ServiceList() {
	return (
		<ServicesSection>
			<ServicesGrid>
				{services.map((service) => (
					<ServiceItem key={service.id} service={service} />
				))}
			</ServicesGrid>

			<div>
				<ServicesDescription>
					<strong>Elmnt</strong> offers personalized training, group classes,
					and nutrition coaching to help you move better, feel stronger, and
					live healthier—supporting you at every step of your wellness journey
				</ServicesDescription>
				<CallToActionButton>Learn more</CallToActionButton>
			</div>
		</ServicesSection>
	);
}

const ServicesSection = styled.section`
	padding: 9.8rem 2rem;
	text-align: center;
`;

const ServicesGrid = styled.div`
	/* display: grid;
	grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); */
	display: flex;
	align-items: center;
	gap: 2.4rem;
	justify-content: center;
	margin-bottom: 6.4rem;
`;

const ServicesDescription = styled.p`
	max-width: 800px;
	margin: 0 auto;
	font-size: 1.6rem;
	line-height: 1.6;
	color: #555;
	margin-bottom: 4.8rem;
`;

export default ServiceList;
