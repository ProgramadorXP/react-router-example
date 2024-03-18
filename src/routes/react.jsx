/* eslint-disable react-refresh/only-export-components */
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";

export default function react() {

  return (
    <Container>
      <Header>
        <Logo />{/*LOGO COMPONENT*/}
        <Navbar />{/*NAV COMPONENT*/}
      </Header>
      <Main>
        {/*PAGES*/}
        <h2>REACT</h2>
      </Main>
    </Container>
  )
}

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-shadow: 2px 2px white;
  font-size: 2rem;
`;

const Header = styled.header`
  background: darkblue;
  display: grid;
  grid-template-columns: min-content 1fr;
  padding: 10px 60px;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: min-content 1fr;
`;