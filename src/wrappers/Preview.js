import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  .content {
    padding: 1rem;
    color: var(--preview-paragraph-color);
    max-width: 672px;
    margin: 0 auto;
  }
  p,
  ul,
  ol,
  blockquote {
    font-family: "Roboto Slab", serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 1rem;
  }
  ol,
  ul {
    padding-left: 2rem;
  }
  li::marker {
    color: var(--orange-200);
  }
  blockquote {
    border-left: 4px solid var(--orange-200);
    border-radius: 0.25rem;
    background: var(--block-quote-bg-color);
    padding: 1rem;
  }
  blockquote p {
    color: var(--preview-heading-color);
    font-weight: 700;
    margin-bottom: 0;
  }
  pre {
    border-radius: 0.25rem;
    background: var(--block-quote-bg-color);
    padding: 1rem;
  }
  code {
    color: var(--preview-heading-color);
  }
`;
