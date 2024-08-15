import styled from "styled-components";

export const Wrapper = styled.nav`
  background: var(--gray-800);
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  .sidebar-toggle-btn {
    background: var(--gray-700);
    border: none;
    display: grid;
    place-items: center;
    cursor: pointer;
    width: 72px;
    height: 72px;
    transition: var(--transition);
  }
  .sidebar-toggle-btn:hover {
    background: var(--orange-200);
  }
  .sidebar-toggle {
    color: var(--gray-100);
  }
  .logo-information {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .logo {
    display: none;
  }
  .document-information {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .info p {
    color: var(--gray-500);
    display: none;
  }
  hr {
    display: none;
    border: none;
    width: 1px;
    height: 40px;
    background: var(--gray-600);
  }
  .edit {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-right: 1rem;
  }
  .delete-btn {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  svg path {
    transition: var(--transition);
  }
  .delete-btn:hover svg path {
    fill: var(--orange-200);
  }
  .save-btn {
    display: flex;
    justify-content: center;
    width: 40px;
    height: 40px;
  }
  .save-btn span {
    display: none;
  }
  @media (width>=768px) {
    .info p {
      display: block;
    }
    .save-btn {
      width: auto;
      height: auto;
    }
    .save-btn span {
      display: inline;
    }
  }
  @media (width>=1280px) {
    .logo {
      display: block;
    }
    hr {
      display: block;
    }
  }
`;
