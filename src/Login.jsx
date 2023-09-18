import * as ST from "./styles/LoginStyles";

const Login = () => {
  return (
    <ST.LoginForm>
      <ST.Title>WAFFLE</ST.Title>
      <ST.InputBox>
        <ST.Input placeholder="웹정보서비스 아이디" />
        <ST.Input type="password" placeholder="비밀번호" />
      </ST.InputBox>
      <ST.ButtonBox>
        <ST.Button>로그인</ST.Button>
        <ST.Button>회원가입</ST.Button>
      </ST.ButtonBox>
      <ST.Info>
        <ST.BlueColor>웹정보서비스</ST.BlueColor> 아이디 및 비밀번호를 입력 후
        로그인 바랍니다.
        <br />
        비밀번호 분실 시 웹정보서비스에서 비밀번호 찾기를 하시기 바랍니다.
      </ST.Info>
    </ST.LoginForm>
  );
};

export default Login;
