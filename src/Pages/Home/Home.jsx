import { Container, Top, Principal } from "./Styles";
import LogoPadrao from "../../Components/Logo/Logo";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import Card from "../../Components/Card/Card";

function Home() {
  const history = useHistory();

  function navegation(path) {
    return history.push(path);
  }

  return (
    <Container>
      <Top>
        <LogoPadrao />{" "}
        <button onClick={() => navegation("/")} className="back">
          Sair
        </button>
      </Top>

      <div className="user">
        <span className="name">Olá, Nome da pessoa</span>
        <span className="modulo">Primeiro módulo (Introdução ao Frontend)</span>
      </div>
      <div className="add">
        <span>Tecnologias </span> <button className="btnadd">+ </button>
      </div>
      <Principal>
        <div className="content">
          <Card />
        </div>
      </Principal>
    </Container>
  );
}
export default Home;
