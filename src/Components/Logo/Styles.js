import styled from "styled-components";

export const Logo = styled.span`
  color: var(--pinkPrimary);
  width: 144px;
  height: 20px;
  font-size: 20px;
  font-weight: 700;
`
export const FormPadrao = styled.form`
  background: var(--greyBody);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  gap: 12px;
  border-radius:      5px;
    h3{
        color:var(--fontColorWhit);
    }
    label{
        text-align:start;
        width:100%;
        color:var(--fontColorWhit);
        font-size: 12px;
    }
    input{
        background:var(--greyCamp);
        width: 330px;
        height:45px;
        color:var(--fontColorWhit) ;
        border-radius: 5px;
        border : 2px solid var(--fontColorWhit);
        padding: 16px;
        gap:10px;
    }
    select{ background:var(--greyCamp);
      width: 330px;
      height:50px;
      color:var(--fontColorWhit) ;
      border-radius: 5px;
      border: none;
      padding: 16px;
      gap:10px;
    }
    input::placeholder{
      color:var(--fontColorWhit);
      font-size:14px;
    }
    .textInf{
      color: var(--fontColorWhit);
      font-size: 12px;
    }
    .textInfRegister{
      color: var(--greyBtt);
      font-size: 12px;
    }
    .login{
      width: 324px;
      height 50px;
      background:var(--pinkPrimary);
      border: 1px solid var(--pinkPrimary);
      border-radius 5px;
    }
    .registration{
      width: 324px;
      height 50px;
      background:var(--fontColor);
      border: 1px solid var(--fontColor);
      border-radius 5px;
    }
    .registrationAction{
        width: 324px;
        height 50px;
        background:var(--pinkNegative);
        border: 1px solid var(--pinkNegative);
        border-radius 5px;
      
    }
    .inputregister{
      border: none;
    }
 
`;
