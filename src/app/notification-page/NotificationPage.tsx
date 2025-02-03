import styled from 'styled-components';
import Header from '../../component/Header';
import RegisterBox from './assets/RegisterBox';
import RecommendBox from './assets/RecommendBox';
import ParticipateBox from './assets/ParticipateBox';
import useAuth from '../../hooks/useAuth';
import { NotificationProps } from '../../types/notification';

const NotificationBoxWrapper = styled.div`
  margin: 0 6vw;
`;

export default function NotificationPage() {
  const { user } = useAuth();
  const notificationList = user && user.notifications;

  return (
    <>
      <Header />
      <NotificationBoxWrapper>
        {notificationList && notificationList.map((data: NotificationProps) => {
          if (data.type === '신청') {
            return <RegisterBox data={data}></RegisterBox>;
          } else if (data.type === '추천') {
            return <RecommendBox data={data}></RecommendBox>;
          } else if (data.type === '참가') {
            return <ParticipateBox data={data}></ParticipateBox>;
          }
        })}
      </NotificationBoxWrapper>
    </>
  );
}