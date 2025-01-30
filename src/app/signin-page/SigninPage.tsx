import styled from 'styled-components';
import NoStyleLink from '../../style/LinkStyle';
import EasyLoginBox from './assets/EasyLoginBox';
import { useNavigate } from 'react-router-dom';

const SigninPageWrapper = styled.div`
  padding: 15vh 37vw 0;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 5px;
`;

const HaveNoAccount = styled.div`
  color: #8D8D8D;
  margin-bottom: 28px;
  cursor: pointer;
`;

const Emph = styled.span`
  color: #626262;

  &:hover {
    text-decoration: underline;
  }
`;

const InputBoxWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 28px;
`;

const InputBox = styled.input`
  border: 1px solid #D9D9D9;
  padding: 9px 10px;
  border-radius: 4px;

  &::placeholder {
    color: #8D8D8D;
  }
`;

const SigninButton = styled.button`
  background-color: #E64B4B;
  color: white;
  padding: 9px 0;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 15px;
`;

const FindAccount = styled.div`
  color: #8D8D8D;
  text-align: center;
  margin-top: 2.5rem;
  cursor: pointer;
`;

export default function SigninPage() {
  const navigate = useNavigate();

  function login() {
    navigate('/');
  }

  return (
    <SigninPageWrapper>
      <Title>
        로그인
      </Title>
      <NoStyleLink to='/signup'>
        <HaveNoAccount>
          계정이 아직 없으신가요? <Emph>회원가입 하러가기</Emph>
        </HaveNoAccount>
      </NoStyleLink>
      <InputBoxWrapper>
        <InputBox type='text' placeholder='아이디를 입력하세요' />
        <InputBox type='password' placeholder='비밀번호를 입력하세요' />
      </InputBoxWrapper>
      <SigninButton onClick={login}>
        로그인
      </SigninButton>
      <EasyLoginBox />
      <FindAccount>
        아이디 혹은 비밀번호를 잊으셨나요?
      </FindAccount>
    </SigninPageWrapper>
  );
}