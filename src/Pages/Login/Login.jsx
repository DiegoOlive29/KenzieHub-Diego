import { Container } from "./Styles";
import LogoPadrao from "../../Components/Logo/Logo";
import { FormPadrao } from "../../Components/Logo/Styles";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup"


function Login() {
  
  const formSchema = yup.object().shape({
    email:yup.string().required("Campo obrigatório"),
    password:yup.string().required("Campo obrigatório"),
  })

  const history = useHistory()

  function navegation (path){
    return history.push(path)

  }
  const {register, handleSubmit, formState:{errors}} = useForm({resolver : yupResolver(formSchema)})

  function onLogin(data){

    axios.post('https://kenziehub.herokuapp.com/sessions',data )
    .then((response) => localStorage.setItem('token',response.data.token))
    .then(()=> console.log(localStorage.token))
    .catch((error) => console.log(error));
  }
  if(localStorage.token){
    return history.push("/Home")
  }
  return (

    <Container>
      <div className="logoPadrao">
        <LogoPadrao />
      </div>
      <FormPadrao onSubmit={handleSubmit(onLogin)}>
        <h3>Login</h3>
        <label htmlFor="">Email</label>
        <input placeholder=" Digite seu e-mail!" {...register('email')}  type="text" />
        {errors.email && (
          <span className="textInfRegister"> {errors.email?.message}</span>
        )}
        <label htmlFor="">Senha</label>
        <input placeholder="Digite sua senha!"  {...register('password')} type="password" />
        {errors.email && (
          <span className="textInfRegister"> {errors.email?.message}</span>
        )}
        <button className="login">Entrar</button>

        <span className="textInf"> Ainda não possui uma conta?</span>

        <button onClick={()=>navegation("/register")} type="submit" className="registration">Cadastre-se</button>
      </FormPadrao>
    </Container>
  );
}
export default Login;
