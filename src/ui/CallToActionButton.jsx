import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function CallToActionButton({ children, to, onClick }) {
	const navigate = useNavigate();

	function handleNavigateClick() {
		if (to) {
			return navigate(-1);
		}
		return;
	}

	return (
		<CallToActionButtonStyles onClick={handleNavigateClick}>
			{children}
		</CallToActionButtonStyles>
	);
}

const CallToActionButtonStyles = styled.button`
	font-size: 1.6rem;
	padding: 1.6rem 3.2rem;
	background-color: var(--secondary-color);
	color: #fff;
	border: none;
	border-radius: 2px;
	letter-spacing: 1px;
	cursor: pointer;
	text-transform: uppercase;
	font-weight: 600;

	&:hover {
		background-color: var(--secondary-color-shade);
	}
`;

export default CallToActionButton;
