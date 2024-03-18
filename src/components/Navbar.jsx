import styled from "styled-components";
import { NavLink as BaseNavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <List>
        <Item>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            HOME
          </NavLink>
        </Item>
        <Item>
          <NavLink to="/html">HTML</NavLink>
        </Item>
        <Item>
          <NavLink to="/css">CSS</NavLink>
        </Item>
        <Item>
          <NavLink to="/javascript">JAVASCRIPT</NavLink>
        </Item>
        <Item>
          <NavLink to="/react">REACT</NavLink>
        </Item>
      </List>
    </Nav>
  );
};

const NavLink = styled(BaseNavLink)`
  color: black;
  text-shadow: 1px 1px green;
  font-size: 1.1rem;
  transition: 300ms all ease-in-out;
  padding: 2px 6px;
  border-radius: 8px;
  &:hover {
    text-shadow: 1px 1px white;
  }
  &.active {
    color: white;
    background: #000058;
  }
`;

const Item = styled.li`
  list-style: none;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: end;
`;

export default Navbar;
