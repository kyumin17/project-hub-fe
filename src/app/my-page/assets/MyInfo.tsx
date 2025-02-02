import styled from 'styled-components';
import { Label } from '../style/MyPageStyle';

const Body = styled.div`
  padding: 0 1vw;
  display: grid;
  grid-template-columns: 1fr 5fr;
  align-items: center;
`;

const Profile = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: #D9D9D9;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  padding: 10px 0;
  width: 100%;

  &:not(&:last-child) {
    border-bottom: 1px solid #BCBCBC;
  }

  div {
    font-size: 0.95rem;
  }

  .info-label {
    font-weight: 500;
  }
`;

export default function MyInfo() {
  return (
    <div>
      <Label>
        내 정보
      </Label>
      <Body>
        <Profile>

        </Profile>
        <div>
          <Info>
            <div className='info-label'>아이디</div>
            <div>thisisid</div>
          </Info>
          <Info>
            <div className='info-label'>이메일</div>
            <div>sample@gmail.com</div>
          </Info>
          <Info>
            <div className='info-label'>학교메일</div>
            <div>sample@sogang.ac.kr</div>
          </Info>
        </div>
      </Body>
    </div>
  );
}