import styled from 'styled-components';
import Header from '../../component/Header';
import MyActivity from './assets/MyActivity';
import MyInfo from './assets/MyInfo';
import MyTech from './assets/MyTech';
import useAuth from '../../hooks/useAuth';

const MyPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 0 9vw 8vh;
`;

export default function MyPage() {
  const { user } = useAuth();

  return (
    <>
      <Header />
      {user && <MyPageWrapper>
        <MyInfo id={user.name} email={user.email} schoolMail={user.school_mail} />
        <MyTech tech={user.tech} />
        <MyActivity writeList={user.write} joinList={user.join} />
      </MyPageWrapper>}
    </>
  );
}