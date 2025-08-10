import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
      /* ----------------------------------------- */
      /* Global Styles */
      /* ----------------------------------------- */
      /* 
      - Font sizes (px)
            10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

      - Spacing system (px)
            2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
      */

      :root {
            --primary-color: #000;

            --secondary-color: #116633;
            --secondary-color-shade: #297547;
      }

      *, *::after, *::before {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            transition: all 0.2s ease-in-out;
      }

      html {
            font-size: 62.5%;
      }

      body {
            font-family: "Open Sans", sans-serif;
            color: var(--primary-color);
            line-height: 1;
            font-weight: 400;
      }

      .container {
            width: 80%;
            margin: auto;
      }

      .active {
            border-bottom: 3px solid var(--secondary-color);
      }

      @media (max-width: 69.75rem) {
            html {
                  font-size: 56.25% ;
            }
      }

      @media (max-width: 61.875rem) {
            /* About */
            .about-wrapper {
                  flex-direction: column;
                  grid-template-columns: 1fr;
            }

            .image-wrapper {
                  order: -1;
                  margin-bottom: 4.8rem;
                  max-width: unset;
                  width: 100%;
                  height: 300px; /* fixed height for mobile */
            }

            .image-wrapper img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover; /* makes it fill both width & height */
                  display: block;
            }

            /* Gallery */
            .gallery-grid {
                  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            }

            .gallery-section {
                  padding: 4.8rem 1.2rem;
            }

            /* Contact */
            .contact-section {
                  grid-template-columns: 1fr;
                  justify-content: center;
                  padding:  4.8rem;
            }

            .contact-image {
                  display: none;
            }
      }

      @media (max-width: 39.25rem) {
            .gallery-grid {
                  flex-direction: column;
            }
      }
`;

export default GlobalStyles;
