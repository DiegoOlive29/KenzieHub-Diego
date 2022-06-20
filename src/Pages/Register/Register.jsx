import { Container, ContainerTop } from "./Styles";
import LogoPadrao from "../../Components/Logo/Logo";
import { FormPadrao } from "../../Components/Logo/Styles";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function Register() {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório.").email("Email Inválido."),
    password: yup
      .string()
      .required("Senha obrigatório.")
      .min(6, "Mínimo 6 caracteres."),
    passwordConf: yup
      .string()
      .required("Campo obrigatório.")
      .oneOf([yup.ref("password")], "Senhas diferentes."),
    name: yup.string().required("Nome obrigatório."),
    bio: yup.string().required("Bio obrigatório."),
    contact: yup.string().required("Contato obrigatório."),
    course_module: yup.string().required("Módulo obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  function createUser(dados) {
    const novoUser = {
      email: dados.email,
      password: dados.password,
      name: dados.name,
      bio: dados.bio,
      contact: dados.contact,
      course_module: dados.course_module,
    };
    console.log(novoUser);

    axios
      .post("https://kenziehub.herokuapp.com/users", novoUser)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  const history = useHistory();

  function navegation(path) {
    return history.push(path);
  }

  return (
    <Container>
      <ContainerTop>
        <LogoPadrao />{" "}
        <button onClick={() => navegation("/")} className="back">
          Voltar
        </button>
      </ContainerTop>
      <FormPadrao onSubmit={handleSubmit(createUser)}>
        <h3>Crie sua conta!</h3>

        <span className="textInfRegister"> Rapido e grátis, vamos nessa</span>

        <label htmlFor="">Email</label>
        <input
          className="inputregister"
          {...register("email")}
          placeholder="Digite sua email! "
          type="text"
        />
        {errors.email && (
          <span className="textInfRegister"> {errors.email?.message}</span>
        )}
        <label htmlFor="">Senha</label>
        <input
          className="inputregister"
          {...register("password")}
          placeholder="Digite sua senha!"
          type="password"
        />
        {errors.password && (
          <span className="textInfRegister"> {errors.password?.message}</span>
        )}
        <label htmlFor="">Confirmar Senha</label>
        <input
          className="inputregister"
          {...register("passwordConf")}
          placeholder="Confirme sua senha!"
          type="password"
        />
        {errors.passwordConf && (
          <span className="textInfRegister">
            {" "}
            {errors.passwordConf?.message}
          </span>
        )}
        <label htmlFor="">Nome</label>
        <input
          className="inputregister"
          {...register("name")}
          placeholder="Digite seu nome!"
          type="text"
        />
        {errors.name && (
          <span className="textInfRegister"> {errors.name?.message}</span>
        )}
        <label htmlFor="">Bio</label>
        <input
          className="inputregister"
          {...register("bio")}
          placeholder="Digite sua bio, sejá criativo!"
          type="text"
        />
        {errors.bio && (
          <span className="textInfRegister"> {errors.bio?.message}</span>
        )}
        <label htmlFor="">Contato</label>
        <input
          className="inputregister"
          {...register("contact")}
          placeholder="(Email, Telefone, LinkedIn)"
          type="text"
        />
        {errors.contact && (
          <span className="textInfRegister"> {errors.contact?.message}</span>
        )}
        <label htmlFor="">Selecionar módulo</label>
        <select
          {...register("course_module")}
          placeholder="Qual módulo você está?"
          type="text"
        >
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </select>
        {errors.course_module && (
          <span className="textInfRegister">
            {errors.course_module?.message}
          </span>
        )}

        <button className="registrationAction" type="submit">
          Cadastrar
        </button>
      </FormPadrao>
    </Container>
  );
}
export default Register;
