import styled from 'styled-components';
import Header from '../../component/Header';
import MyActivity from './assets/MyActivity';
import MyInfo from './assets/MyInfo';
import MyTech from './assets/MyTech';

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding: 0 6vw 8vh;
`;

export default function MyPage() {
  return (
    <>
      <Header />
      <MyPageWrapper>
        <MyInfo />
        <MyTech />
        <MyActivity />
      </MyPageWrapper>
    </>
  );
}