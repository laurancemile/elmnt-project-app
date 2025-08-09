import styled from "styled-components";

function Logo() {
	return <Image src="images/logo.png" alt="Elmnt logo picture" />;
}

const Image = styled.img`
	width: 180px;
	height: 180px;
`;

export default Logo;
