// src/styles/GlobalStyles.tsx
/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
    <Global
        styles={css`
      /* 1. Reset CSS */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* 2. Body 기본 설정 */
    body {
        font-family: 'Pretendard', sans-serif;
        background-color: #fdfdfd;
        color: #333;
        line-height: 1.5;
    }

    /* 3. 링크 기본 스타일 */
    a {
        text-decoration: none;
        color: inherit;
    }

    /* 4. 이미지 기본 설정 */
    img {
        max-width: 100%;
        display: block;
    }

    /* 5. 기타 요소들 */
    button {
        border: none;
        background: none;
        cursor: pointer;
    }
    `}
    />
);

export default GlobalStyles;