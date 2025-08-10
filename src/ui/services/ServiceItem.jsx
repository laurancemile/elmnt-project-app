import styled from "styled-components";

function ServiceItem({ service }) {
	const { heading, image } = service;

	function handleMouseEnter() {}

	return (
		<ServiceCard onMouseEnter={handleMouseEnter}>
			<ServiceImage src={image} alt={heading} />
			<ServiceHeading>{heading}</ServiceHeading>
		</ServiceCard>
	);
}

const ServiceCard = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 380px;
	position: relative;
	cursor: pointer;
	overflow: hidden;
`;

const ServiceImage = styled.img`
	width: 380px;
	height: 300px;
	max-width: 300px;
	border-radius: 2px;
	object-fit: cover;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.2);
	}
`;

const ServiceHeading = styled.h2`
	font-size: 1.8rem;
	text-transform: uppercase;
	color: #fff;
	position: absolute;
	top: 25%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export default ServiceItem;
