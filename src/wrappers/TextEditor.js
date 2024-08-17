import styled from "styled-components";

export const Wrapper = styled.section`
  min-height: calc(100vh - 4.5rem);
  background: var(--main-bg-color);
  /* width: 100%; */
  .editor-container {
    /* width: 100%; */
    display: flex;
  }
  hr {
    display: none;
  }
  .markdown {
    display: ${(props) => (props.showpreview === "true" ? "none" : "block")};
  }
  .preview {
    display: ${(props) => (props.showpreview === "true" ? "block" : "none")};
  }
  @media (width>=768px) {
    hr {
      display: block;
      border: none;
      width: 0.1rem;
      background: var(--hr-bg-color);
      min-height: calc(100vh - 4.5rem);
    }
    .preview {
      display: block;
    }
  }
`;
