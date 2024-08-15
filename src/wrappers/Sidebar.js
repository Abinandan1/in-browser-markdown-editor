import styled from "styled-components";

export const Wrapper = styled.section`
  background: var(--gray-900);
  margin-left: ${(props) => (props.showsidebar === "true" ? "0px" : "-250px")};
  transition: margin-left 0.3s linear;
  aside {
    width: 250px;
    padding: 1.5rem;
    display: grid;
    gap: 1.5rem;
  }
  p {
    color: var(--gray-500);
    letter-spacing: 2px;
  }
  .documents {
    display: grid;
    gap: 1rem;
  }
  .document {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  @media (width>=1280px) {
    .logo {
      display: none;
    }
  }
`;
