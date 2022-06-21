import { Container, Content } from "./styles.js";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function CadastroTec({ mostra, setMostra, dados }) {
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function addTech(dadosCads) {
    axios.defaults.headers.post["Authorization"] = `Bearer ${dados}`;
    axios
      .post(`https://kenziehub.herokuapp.com/users/techs`, dadosCads)
      .then(() => setMostra(false))
      .catch((err) => console.log(err));
  }

  return (
    <>
      {mostra ? (
        <Container>
          <Content>
            <div className="topContainer">
              Cadastrar Tecnologia{" "}
              <button onClick={() => setMostra(false)}>X</button>
            </div>

            <form className="principal" onSubmit={handleSubmit(addTech)}>
              <label htmlFor="">Nome</label>
              <input
                className="inputregister"
                {...register("title")}
                placeholder="(Email, Telefone, LinkedIn)"
                type="text"
              />
              {errors.title && (
                <span className="textInfRegister">
                  {" "}
                  {errors.title?.message}
                </span>
              )}
              <label htmlFor="">Selecionar status</label>
              <select
                {...register("status")}
                placeholder="Qual módulo você está?"
                type="text"
              >
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
              {errors.status && (
                <span className="textInfRegister">
                  {" "}
                  {errors.status?.message}
                </span>
              )}
              <button className="login" type="submit">
                Entrar
              </button>
            </form>
          </Content>
        </Container>
      ) : (
        ""
      )}
    </>
  );
}
export default CadastroTec;
