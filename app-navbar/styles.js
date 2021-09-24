import { css } from 'lit';

export const navStyles = css`
  :host { 
    display: grid;
    grid-template-rows: 1fr 5.4rem;
    min-height: 100vh; 
  }
  @media (min-width: 960px) {
    :host { 
      grid-template-rows: 1fr;
      grid-template-columns: 32.0rem 1fr;
    }
  }

  #mobile {
    opacity: 0;
    transform: translate(0, 100%);
    transition: transform 100ms linear, width 100ms linear, opacity 100ms linear;
  }
  #mobile[open] {
    opacity: 1;
    transform: translate(0, 0);
    transition: transform 200ms ease-in, width 200ms ease-in, opacity 200ms ease-in; 
  }
`;
