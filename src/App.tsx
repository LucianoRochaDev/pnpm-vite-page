import ActionsGroup from "./components/Header/ActionsGroup";
import Header from "./components/Header/Header";
import Logo from "./components/Header/Logo";
import Navbar from "./components/Header/Navbar";
import Article from "./components/Main/Article";
import Main from "./components/Main/Main";
import "./App.css";

function App() {
  return (
    <>
      <Header>
        <Logo></Logo>
        <Navbar></Navbar>
        <ActionsGroup></ActionsGroup>
      </Header>
      <Main>
        <Article></Article>
        <Article></Article>
        <Article></Article>
      </Main>
    </>
  );
}

export default App;
