import styled from "styled-components";
import CallToActionButton from "./CallToActionButton";

function PageNotFound({ onClick }) {
	return (
		<NotFoundSection>
			<Heading>404 - Page Not Found</Heading>
			<Description>
				Sorry, the page you are looking for doesn’t exist or has been moved.
			</Description>
			<CallToActionButton to={"/"} onClick={onClick}>
				&larr; Go Back
			</CallToActionButton>
		</NotFoundSection>
	);
}

export default PageNotFound;

const NotFoundSection = styled.section`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 2rem;
	background-color: #f8f8f8;
`;

const Heading = styled.h1`
	font-size: 3rem;
	font-weight: bold;
	color: #333;
	margin-bottom: 1rem;
`;

const Description = styled.p`
	font-size: 1.2rem;
	color: #666;
	margin-bottom: 2rem;
	max-width: 500px;
`;
