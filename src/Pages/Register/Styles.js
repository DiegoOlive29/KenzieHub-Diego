import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ContainerTop = styled.div`
  width: 370px;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 0;
  margin: 0 0 20px 0;

  .back {
    width: 80px;
    height: 40px;
    background: var(--greyBody);
    border: 1px solid var(--greyBody);
    border-radius: 5px;
    font-size: 12px;
  }
`;
