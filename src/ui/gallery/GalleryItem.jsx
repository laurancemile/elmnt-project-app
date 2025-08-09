import styled from "styled-components";

function GalleryItem({ item }) {
	const { image, title } = item;

	return (
		<GalleryItemWrapper>
			<figure>
				<img src={image} alt={title || "Gallery item"} />
			</figure>
		</GalleryItemWrapper>
	);
}

const GalleryItemWrapper = styled.div`
	figure {
		margin: 0;
	}

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 2px;
		display: block;
	}
`;

export default GalleryItem;
