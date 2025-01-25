import styled from 'styled-components';
import Header from '../../component/Header';
import RegisterBox from './assets/RegisterBox';
import RecommendBox from './assets/RecommendBox';
import ParticipateBox from './assets/ParticipateBox';
import { useEffect, useState } from 'react';
import http from '../../api/http';

const NotificationBoxWrapper = styled.div`
  margin: 0 6vw;
`;

export default function NotificationPage() {
  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    const fetchNotification = async() => {
      try {
        const res = await http.get('/users/4810');
        setNotificationList(res.data.notification);
      } catch (error) {
        console.log(error);
      }
    }

    fetchNotification();
  }, []);

  return (
    <>
      <Header />
      <NotificationBoxWrapper>
        {notificationList && notificationList.map((data) => {
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