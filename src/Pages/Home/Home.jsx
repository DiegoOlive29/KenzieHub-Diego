import { Container, Top, Principal } from "./Styles";
import LogoPadrao from "../../Components/Logo/Logo";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Card from "../../Components/Card/Card";
import { useEffect, useState } from "react";
import CadastroTec from "../../Components/CadastroTec/CadastroTec";
function Home({ dados }) {
  const history = useHistory();
  const [tecs, setTecs] = useState([]);
  const [mostra, setMostra] = useState(false);

  function navegation(path) {
    localStorage.clear();
    return history.push(path);
  }

  //'https://kenziehub.herokuapp.com/users/:user_id'
  useEffect(() => {
    axios
      .get(`https://kenziehub.herokuapp.com/users/${dados.user.id}`)
      .then((response) => setTecs(response.data))

      .catch((error) => console.log(error));
  }, [tecs]);

  return (
    <Container>
      <Top>
        <LogoPadrao />{" "}
        <button onClick={() => navegation("/")} className="back">
          Sair
        </button>
      </Top>

      <div className="user">
        <span className="name">Olá, {dados.user.name}</span>
        <span className="modulo">{dados.user.course_module}</span>
      </div>
      <div className="add">
        <span>Tecnologias </span>{" "}
        <button className="btnadd" onClick={() => setMostra(true)}>
          +{" "}
        </button>
      </div>
      <Principal>
        <div className="content">
          {tecs.techs
            ? tecs.techs.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  status={item.status}
                  dados={dados.token}
                />
              ))
            : ""}
        </div>
      </Principal>
      <CadastroTec mostra={mostra} setMostra={setMostra} dados={dados.token} />
    </Container>
  );
}
export default Home;
