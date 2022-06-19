import {Container , ContainerTop} from './Styles';
import LogoPadrao from '../../Components/Logo/Logo';
import { FormPadrao } from '../../Components/Logo/Styles';
import { Link } from 'react-router-dom';
function Register(){

    return(
    <Container>
        <ContainerTop>
        <LogoPadrao/> <button className='back'>Voltar</button>
        </ContainerTop>
        <FormPadrao>
            <h3>Crie sua conta!</h3> 

            <span className='textInfRegister'> Rapido e grátis, vamos nessa</span>

            <label htmlFor="">Nome</label>
            <input className='inputregister' placeholder=' Digite seu nome!' type="text" />
            
            <label htmlFor="">Email</label>
            <input className='inputregister' placeholder='Digite sua email!' type="text" />
        
            <label htmlFor="">Senha</label>
            <input className='inputregister' placeholder='Digite sua senha!' type="text" />

            <label htmlFor="">Confirmar Senha</label>
            <input className='inputregister' placeholder='Confirme sua senha!' type="text" />

            <label htmlFor="">Bio</label>
            <input className='inputregister' placeholder='Digite sua bio, sejá criativo!' type="text" />

            <label htmlFor="">Contato</label>
            <input className='inputregister' placeholder='Digite um contato seu!' type="text" />
          
            <label htmlFor="">Selecionar módulo</label>
            <input className='inputregister' placeholder='Qual módulo você está?' type="text" />


            <button className='registrationAction' >Cadastrar</button>


        </FormPadrao>    

    </Container>
)
}export default Register;