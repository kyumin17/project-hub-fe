import styled from 'styled-components';
import EmailSelectButton from './assets/EmailSelectButton';
import NoStyleLink from '../../styles/LinkStyle';
import { useNavigate } from 'react-router-dom';
import NotificationCheckBox from '../../component/NotificationCheckBox';
import AlertBox from '../../component/AlertBox';
import { useState, useEffect } from 'react';

interface AlertProps {
  isshow: boolean;
  iswrite: boolean;
};

const SignupPageWrapper = styled.div`
  padding: 10vh 30vw 5vh;
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
  position: relative;

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

const AlertWrapper = styled.div`
  margin-top: 6px;
`;

const Alert = styled.div<AlertProps>`
  color: ${(props) => (props.iswrite ? '#F50000' : '#626262')};
  display: ${(props) => (props.isshow ? 'inherit' : 'none')};
  font-size: 0.8rem;
`;

export default function SignupPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const validWord = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '~', '!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '+', '=', '`', '|', '\\', '(', ')', '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'];

  const [isSuccessShow, setIsSuccessShow] = useState(false);
  const [isLengthSatisfy, setIsLengthSatisfy] = useState(false);
  const [isWordSatisfy, setIsWordSatisfy] = useState(false);
  const [isCheckSatisfy, setIsCheckSatisfy] = useState(false);

  useEffect(() => {
    if (password.length >= 8) {
      setIsLengthSatisfy(true);
    } else {
      setIsLengthSatisfy(false);
    }

    let isValid = false;
    for (let i of validWord) {
      if (password.includes(i)) {
        isValid = true;
        setIsWordSatisfy(true);
        break;
      }
    }

    setIsWordSatisfy(isValid);
  }, [password]);

  useEffect(() => {
    setIsCheckSatisfy(password === checkPassword);
  }, [password, checkPassword]);

  function join() {
    setIsSuccessShow(true);
    setTimeout(() => {navigate('/signin')}, 800);
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
          <InputBox type='password' value={password} onChange={(e) => setPassword(e.target.value)} maxLength={127} />
          <div></div>
          <AlertWrapper>
            <Alert isshow={!isLengthSatisfy} iswrite={password ? true : false}>최소 8자 이상이어야 합니다.</Alert>
            <Alert isshow={!isWordSatisfy} iswrite={password ? true : false}>숫자 혹은 특수문자가 포함되어 있어야 합니다.</Alert>
          </AlertWrapper>
        </InputWrapper>
        <InputWrapper>
          <Label>
            비밀번호 확인
          </Label>
          <InputBox type='password' value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} />
          <div></div>
          <AlertWrapper>
            <Alert isshow={checkPassword && !isCheckSatisfy} iswrite={checkPassword ? true : false}>비밀번호가 일치하지 않습니다.</Alert>
          </AlertWrapper>
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
          <div></div>
          <NotificationCheckBox />
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
      <AlertBox text='가입이 완료되었습니다' type='success' isShow={isSuccessShow} setIsShow={setIsSuccessShow} />
    </SignupPageWrapper>
  );
}