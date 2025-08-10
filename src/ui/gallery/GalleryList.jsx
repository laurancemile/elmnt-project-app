import styled from "styled-components";
import galleryData from "../../data/galleryData";
import GalleryItem from "./GalleryItem";

function GalleryList() {
	return (
		<GallerySection aria-label="Image Gallery">
			<GalleryGrid className="gallery-grid" as="ul">
				{galleryData.map((gallery) => (
					<GalleryListItem as="li" key={gallery.id}>
						<GalleryItem item={gallery} />
					</GalleryListItem>
				))}
			</GalleryGrid>
		</GallerySection>
	);
}

const GallerySection = styled.section`
	padding: 2rem;
`;

const GalleryGrid = styled.div`
	gap: 1.6rem;
	list-style: none;
	padding: 0;
	margin: 0;
`;

const GalleryListItem = styled.div`
	/* Optional: Add focus/hover styling or spacing */
`;

export default GalleryList;
