/** @jsxImportSource @emotion/react  */

import { css } from '@emotion/react';
import React from 'react';

const Footer = ({ isDark, setIsDark }) => {
  return (
    <div
      css={css`
        margin: 1rem 0;
        display: flex;
        justify-content: center;
      `}
    >
      <p>Book List Inc, All rights reserved.</p>
      <button
        onClick={() => setIsDark(!isDark)}
        css={css`
          background-color: #fcfcfd;
          color: #36395a;
          border: 1px solid rgba(34, 36, 38, 0.5);
          padding: 0.6rem 1.5rem;
          margin-left: 15px;
          border-radius: 3px;
          cursor: pointer;

          &:hover {
            transform: translate(-2px);
          }
        `}
      >
        {isDark ? 'light' : 'dark'}
      </button>
    </div>
  );
};

export default Footer;
