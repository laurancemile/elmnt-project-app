import styled from "styled-components";
import ServiceItem from "./ServiceItem";
import CallToActionButton from "../CallToActionButton";

const services = [
	{
		id: 1,
		heading: "Personal Training",
		image:
			"https://images.unsplash.com/photo-1659176988433-4bb271684f28?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 2,
		heading: "Nutrition Plans",
		image:
			"https://plus.unsplash.com/premium_photo-1726096576282-efb80d87c7b8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		id: 3,
		heading: "Group Classes",
		image:
			"https://images.unsplash.com/photo-1652364690376-db27a1965bc0?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
					delectus repellendus dignissimos expedita est eaque sapiente magni
					minima dolor maxime!
				</ServicesDescription>
				<CallToActionButton>Join Now</CallToActionButton>
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
