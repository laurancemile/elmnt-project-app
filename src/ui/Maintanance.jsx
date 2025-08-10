import styled from "styled-components";
import Logo from "./Logo";

function UnderMaintenance() {
	return (
		<MaintenanceWrapper>
			<Logo />
			<Heading>We’ll Be Back Soon</Heading>
			<Message>
				Our website is currently under maintenance and is being redesigned. It
				will be available shortly — thank you for your patience! 😉
			</Message>
		</MaintenanceWrapper>
	);
}

const MaintenanceWrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	text-align: center;
	background-color: #f5f5f5;
	padding: 2rem;
`;

const Heading = styled.h1`
	font-size: 2.4rem;
	color: #333;
	margin-bottom: 1rem;
`;

const Message = styled.p`
	font-size: 1.6rem;
	color: #555;
	max-width: 400px;
`;

export default UnderMaintenance;
