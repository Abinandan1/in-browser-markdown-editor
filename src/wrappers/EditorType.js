import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--editor-type-bg-color);
  width: 100%;
  display: flex;
  height: 42px;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  .in-app-heading-small {
    color: var(--preview-paragraph-color);
  }
  .preview-btn {
    background: transparent;
    border: none;
    display: flex;
    cursor: pointer;
  }
  svg path {
    transition: var(--transition);
  }
  .preview-btn:hover svg path {
    fill: var(--orange-200);
  }

  @media (width>=768px) {
    .preview-btn {
      display: ${(props) => (props.name === "PREVIEW" ? "flex" : "none")};
    }
  }
`;
