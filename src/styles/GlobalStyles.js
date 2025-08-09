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

            --secondary-color: oklch(76.5% 0.177 163.223);
      }

      *, *::after, *::before {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
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
`;

export default GlobalStyles;
