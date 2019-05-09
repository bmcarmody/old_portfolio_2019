import { css } from 'styled-components';

export const Font__Bold = css`
  font-weight: 700;
`;

export const Universal__Padding = css`
  padding: 0 12rem;

  @media screen and (max-width: 768px) {
    padding: 0 6rem;
  }
`;

export const Section__Padding = css`
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media screen and (max-width: 768px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;
