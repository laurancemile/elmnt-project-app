import styled from "styled-components";

function CallToActionButton({ children }) {
	return <CallToActionButtonStyles>{children}</CallToActionButtonStyles>;
}

const CallToActionButtonStyles = styled.button`
	font-size: 1.6rem;
	padding: 1.2rem 3.2rem;
	/* background-color: #ff5722; */
	background-color: var(--secondary-color);
	color: #fff;
	border: none;
	border-radius: 2px;
	cursor: pointer;
	text-transform: uppercase;

	&:hover {
		background-color: #e64a19;
	}
`;

export default CallToActionButton;
