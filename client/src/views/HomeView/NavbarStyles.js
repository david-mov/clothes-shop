import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 10vh;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 60%;
  height: 70vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 458px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
  }

  a {
    padding: 0.2rem;
    color: white;
  }
`;
