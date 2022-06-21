import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0px;
  left: 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  gap: 20px;

  position: absolute;
  min-width: 370px;
  min-height: 340px;
  background: var(--greyBody);
  border-radius: 5px;

  color: var(--fontColorWhit);
  .topContainer {
    height: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    background-color: var(--greyCamp);
  }
  .topContainer > button {
    background-color: var(--greyCamp);
    border: none;
  }
  .principal {
    width: 100%;
    height: 290px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 20px;
    gap: 10px;
  }
  .login {
    width: 330px;
    height: 60px;
    background: var(--pinkPrimary);
    border: 1px solid var(--pinkPrimary);
    border-radius: 5px;
  }
  input {
    background: var(--greyCamp);
    width: 330px;
    height: 55px;
    color: var(--fontColorWhit);
    border-radius: 5px;
    border: 2px solid var(--fontColorWhit);
    padding: 16px;
    gap: 10px;
  }
  select {
    background: var(--greyCamp);
    width: 330px;
    height: 55px;
    color: var(--fontColorWhit);
    border-radius: 5px;
    border: 2px solid var(--fontColorWhit);
    padding: 16px;
    gap: 10px;
  }
`;
