import { Container } from "./Styles";
import LogoPadrao from "../../Components/Logo/Logo";
import { FormPadrao } from "../../Components/Logo/Styles";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Container>
      <div className="logoPadrao">
        <LogoPadrao />
      </div>
      <FormPadrao>
        <h3>Login</h3>
        <label htmlFor="">Email</label>
        <input placeholder=" Digite seu e-mail!" type="text" />

        <label htmlFor="">Senha</label>
        <input placeholder="Digite sua senha!" type="text" />

        <button className="login">Entrar</button>

        <span className="textInf"> Ainda não possui uma conta?</span>

        <button className="registration">Cadastre-se</button>
      </FormPadrao>
    </Container>
  );
}
export default Home;
