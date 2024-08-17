import styled from "styled-components";

export const Wrapper = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(124, 129, 135, 0.5);
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  .modal-card {
    background: var(--modal-bg-color);
    display: grid;
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.25rem;
    width: 90%;
    max-width: 350px;
  }
  h4 {
    color: var(--inline-snippets-color);
  }
  p {
    color: var(--preview-paragraph-color);
  }
  input {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--block-quote-bg-color);
    padding-bottom: 0.25rem;
    caret-color: var(--orange-200);
    font-family: "Roboto Slab";
    color: var(--inline-snippets-color);
  }
  input:focus {
    outline: none;
  }
  .btn-container {
    display: flex;
    gap: 1rem;
  }
  .cancel-btn {
    background: var(--block-quote-bg-color);
    color: var(--inline-snippets-color);
  }
`;
