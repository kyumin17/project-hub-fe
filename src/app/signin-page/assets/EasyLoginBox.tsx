import styled from 'styled-components';

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #999999;
  position: relative;
  margin: 2rem 0 2.7rem;
`;

const Label = styled.p`
  background-color: white;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  margin: 0;
  color: #808080;
  padding: 0 1.5rem;
`;

const LogoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16%;
  padding: 0 3%;
`;

const GoogleWrapper = styled.div`
  border: 1px solid #cecece;
  border-radius: 13px;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Logo = styled.img`
  aspect-ratio: 1/1;
  border-radius: 13px;
  width: 100%;
  height: 100%;

  &:first-child {
    width: 80%;
    height: 80%;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
`;

export default function EasyLoginBox() {
  return (
    <div>
      <Divider>
        <Label>간편로그인</Label>
      </Divider>
      <LogoWrapper>
        <GoogleWrapper>
          <Logo src='/img/google-logo.png' alt='google' />
        </GoogleWrapper>
        <Logo src='/img/kakaotalk-logo.png' alt='kakao' />
        <Logo src='/img/instagram-logo.png' alt='instagram' />
        <Logo src='/img/naver-logo.png' alt='naver' />
      </LogoWrapper>
    </div>
  );
}