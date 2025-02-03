import styled from 'styled-components';
import { BoxWrapper, Content, PostType, PostTitle } from '../style/BoxStyle';
import NoStyleLink from '../../../styles/LinkStyle';

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #FF9D00;
`;

export default function ParticipateBox({ data }) {
  return (
    <NoStyleLink to={`/post/${data.post_id}`}>
      <BoxWrapper isRead={data.is_read}>
        <Title>
          참가
        </Title>
        <Content>
          <PostType>
            {data.post_type}
          </PostType>
          <PostTitle>
            {data.post_title}
          </PostTitle>
          <div>
            에 참가 신청이 수락되었어요!
          </div>
        </Content>
      </BoxWrapper>
    </NoStyleLink>
  );
}