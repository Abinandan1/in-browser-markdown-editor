import styled from "styled-components";

export const Wrapper = styled.section`
  background: var(--gray-900);
  margin-left: ${(props) => (props.showsidebar === "true" ? "0px" : "-250px")};
  transition: margin-left 0.3s linear;
  aside {
    width: 250px;
    padding: 1.5rem;
    display: grid;
    grid-template-rows: repeat(4, auto) 1fr;
    gap: 1.5rem;
    height: 100vh;
    align-items: center;
    align-content: start;
  }
  p {
    color: var(--gray-500);
    letter-spacing: 2px;
  }
  span {
    transition: var(--transition);
  }
  .documents {
    display: grid;
    gap: 1rem;
  }
  .document {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
  }
  .document:hover span {
    color: var(--orange-200);
  }
  .theme-btn-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    align-self: flex-end;
  }
  .theme-toggle-container {
    background: var(--gray-600);
    width: 3rem;
    height: 1.5rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding: 0 5px;
    cursor: pointer;
  }
  .toggle-theme-btn {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--gray-100);
    transition: var(--transition);
    transform: ${(props) =>
      props.darktheme === "true" ? "translateX(1.5rem)" : "none"};
  }
  @media (width>=1280px) {
    aside {
      grid-template-rows: repeat(3, auto) 1fr;
    }
    .logo {
      display: none;
    }
  }
`;
