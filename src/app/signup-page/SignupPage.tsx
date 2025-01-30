import styled from 'styled-components';
import EmailSelectButton from './assets/EmailSelectButton';
import NoStyleLink from '../../style/LinkStyle';
import { useNavigate } from 'react-router-dom';

const SignupPageWrapper = styled.div`
  padding: 10vh 30vw 0;
`;

const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;

const Welcome = styled.div`
  color: #626262;
  margin-bottom: 28px;
`;

const Form = styled.div`
  position: relative;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 1.3rem 0;
  align-items: center;

  &:not(:last-of-type) {
    border-bottom: 1px solid #D9D9D9;
  }
`;

const Label = styled.div`
  font-size: 0.95rem;
`;

const InputBox = styled.input`
  border: 1px solid #D9D9D9;
  border-radius: 3px;
  padding: 7px 10px;
`;

const EmailBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  align-items: center;
  gap: 12px;
  position: relative;
`;

const VerifyButton = styled.button`
  background-color: #F5F5F5;
  color: #626262;
  height: 100%;
  border-radius: 3px;
  position: absolute;
  right: 0;
  width: 7rem;
`;

const JoinButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 70%;
  margin: 0 auto;
  margin-top: 3.5rem;
`;

const JoinButton = styled.button`
  background-color: #E64B4B;
  color: white;
  padding: 8px 0;
  border-radius: 4px;
`;

const CancelButton = styled.button`
  background-color: #F5F5F5;
  color: #8D8D8D;
  padding: 8px 0;
  border-radius: 4px;
`;

const HasAccount = styled.div`
  cursor: pointer;
  text-align: center;
  margin-top: 2.5rem;
  color: #8D8D8D;
`;

const Emph = styled.span`
  color: #626262;

  &:hover {
    text-decoration: underline;
  }
`;

const CheckBoxWrapper = styled.label`
  position: absolute;
  left: 25%;
  color: #626262;
  margin-top: 4.7rem;
  font-size: 0.8rem;
`;

const NotificationCheckBox = styled.input`
  margin-left: 0;
  margin-right: 8px;
`;

export default function SignupPage() {
  const navigate = useNavigate();

  function join() {
    navigate('/signin');
  }

  function cancel() {
    navigate('/signin');
  }

  return (
    <SignupPageWrapper>
      <Title>
        회원가입
      </Title>
      <Welcome>
        [사이트명]에 오신 것을 환영합니다
      </Welcome>
      <Form>
        <InputWrapper>
          <Label>
            아이디
          </Label>
          <InputBox type='text' />
        </InputWrapper>
        <InputWrapper>
          <Label>
            비밀번호
          </Label>
          <InputBox type='password' />
        </InputWrapper>
        <InputWrapper>
          <Label>
            비밀번호 확인
          </Label>
          <InputBox type='password' />
        </InputWrapper>
        <InputWrapper>
          <Label>
            학교 인증
          </Label>
          <EmailBox>
            <InputBox type='text' />
            <div>@sogang.ac.kr</div>
            <VerifyButton>
              인증하기
            </VerifyButton>
          </EmailBox>
        </InputWrapper>
        <InputWrapper>
          <Label>
            이메일
          </Label>
          <EmailBox>
            <InputBox type='text' />
            <EmailSelectButton />
          </EmailBox>
          <CheckBoxWrapper>
            <NotificationCheckBox type='checkbox' />
            이메일로 내가 관심있어 할 만한 모집글에 대한 알람을 받습니다
          </CheckBoxWrapper>
        </InputWrapper>
      </Form>
      <JoinButtonWrapper>
        <JoinButton onClick={join}>
          가입하기
        </JoinButton>
        <CancelButton onClick={cancel}>
          취소하기
        </CancelButton>
      </JoinButtonWrapper>
      <NoStyleLink to='/signin'>
        <HasAccount>
          이미 계정이 있으신가요? <Emph>로그인 하러가기</Emph>
        </HasAccount>
      </NoStyleLink>
    </SignupPageWrapper>
  );
}