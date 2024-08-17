import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  .roboto-mono-regular {
    color: var(--markdown-color);
    width: 100%;
    height: 100%;
    padding: 1rem;
    word-wrap: break-word;
    white-space: normal;
    overflow: auto;
  }
  .roboto-mono-regular:focus {
    outline: none;
  }
  @media (width>=768px) {
    /* .preview-btn {
        display: none;
        } */
  }
`;
