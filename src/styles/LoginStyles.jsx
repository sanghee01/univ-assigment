import styled from "styled-components";

export const LoginForm = styled.form`
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 420px;
  height: 500px;
  margin: auto;
  padding: 0 50px;
`;

export const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 3cqi;
  font-size: 40px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 10px;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  :last-child {
    background-color: rgb(33 33 33);
  }
`;

export const Button = styled.button`
  cursor: pointer;
  margin-top: 10px;
  padding: 17px;
  width: 155px;
  border: none;
  background-color: rgb(40 98 255);
  color: white;
  :disabled {
  }
`;

export const Info = styled.p`
  font-size: 11.5px;
`;

export const BlueColor = styled.span`
  color: blue;
`;
