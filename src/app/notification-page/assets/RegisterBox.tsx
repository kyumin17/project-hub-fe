import styled from 'styled-components';
import { BoxWrapper, Content, PostType, PostTitle } from '../style/BoxStyle';
import AlertBox from '../../../component/AlertBox';
import { useState } from 'react';

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #4DAF51;
`;

const Detail = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  margin-bottom: 5px;
`;

const UserName = styled.div`
  color: #407941;
  font-weight: 500;
  line-height: 1rem;
`;

const RegisterMessage = styled.div`
  color: #3D3D3D;
  line-height: 1rem;
`;

const Select = styled.div`
  display: flex;
  gap: 15px;
`;

const AcceptButton = styled.button`
  background-color: #57D95C;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 600;
`;

const RejectButton = styled.button`
  background-color: #D9D9D9;
  color: #363636;
  padding: 5px 12px;
  border-radius: 3px;
  font-size: 600;
`;

export default function RegisterBox({ data }) {
  const [isAlertShow, setIsAlertShow] = useState(false);

  function accept() {
    setIsAlertShow(true);
  }

  return (
    <>
      <BoxWrapper isRead={data.is_read}>
        <Title>
          신청
        </Title>
        <Content>
          <PostType>
            {data.post_type}
          </PostType> 
          <PostTitle>
            {data.post_title}
          </PostTitle>
          <div>
          에 참가 신청이 들어왔습니다
          </div>
        </Content>
        <Detail>
          <UserName>
            {data.user_name}
          </UserName>
          <RegisterMessage>
            {data.content}
          </RegisterMessage>
        </Detail>
        <Select>
          <AcceptButton onClick={accept}>
            수락하기
          </AcceptButton>
          <RejectButton>
            거절
          </RejectButton>
        </Select>
      </BoxWrapper>
      <AlertBox text='수락이 완료되었습니다' type='success' isShow={isAlertShow} setIsShow={setIsAlertShow} />
    </>
  );
}