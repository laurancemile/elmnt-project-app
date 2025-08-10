import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
            line-height: 1.5;
            font-weight: 400;
            background-color: #fff;
      }

      .container {
            width: min(90%, 1200px);
            margin: auto;
      }

      .active {
            border-bottom: 3px solid var(--secondary-color);
      }

      /* -------- Tablet Breakpoint -------- */
      @media (max-width: 69.75rem) {
            html {
                  font-size: 56.25%;
            }
      }

      /* -------- Mobile & Tablet Landscape -------- */
      @media (max-width: 61.875rem) {
            /* About */
            .about-wrapper {
                  display: flex;
                  flex-direction: column;
                  grid-template-columns: 1fr;
                  gap: 2.4rem;
            }

            .image-wrapper {
                  order: -1;
                  margin-bottom: 4.8rem;
                  max-width: 100%;
                  width: 100%;
                  height: auto;
            }

            .image-wrapper img {
                  width: 100%;
                  height: auto;
                  max-height: 300px;
                  object-fit: cover;
                  display: block;
            }

            /* Gallery */
            .gallery-grid {
                  flex-direction: column !important;
                  gap: 2.4rem;
            }

            .gallery-section {
                  padding: 4.8rem 1.2rem;
            }

            /* Contact */
            .contact-section {
                  display: grid;
                  grid-template-columns: 1fr;
                  justify-content: center;
                  gap: 2.4rem;
                  padding: 4.8rem 1.2rem;
            }

            .contact-image {
                  display: none;
            }
      }

      /* -------- Small Mobile -------- */
      @media (max-width: 39.25rem) {
            .gallery-grid {
                  grid-template-columns: 1fr; /* single column */
            }
      }

      /* -------- Hero Title Scaling -------- */
      @media (max-width: 47.5rem) {
            .hero-title {
                  font-size: 4.4rem;
                  text-align: center;
            }
      }
`;

export default GlobalStyles;
