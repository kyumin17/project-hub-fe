import styled from 'styled-components';
import Tag from '../../../component/Tag';
import { BoxWrapper, Content, PostType, PostTitle } from '../style/BoxStyle';
import NoStyleLink from '../../../styles/LinkStyle';
import useAuth from '../../../hooks/useAuth';

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #626262;
`;

const Description = styled.div`
  color: #626262;
  font-size: 0.95rem;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-box: wrap;
  gap: 15px;
`;

export default function RecommendBox({ data }) {
  const { user } = useAuth();

  return (
    <NoStyleLink to={`/post/${data.post_id}`}>
      <BoxWrapper isRead={data.is_read}>
        <Title>
          추천
        </Title>
        <Description>
          {user && user.name}님에게 딱 맞는 모집 글이에요
        </Description>
        <Content>
          <PostType>
            {data.post_type}
          </PostType> 
          <PostTitle>
            {data.post_title}
          </PostTitle>
        </Content>
        <TagWrapper>
          {data.tags.map((label: string) => {
            return <Tag label={label} key={label}></Tag>;
          })}
        </TagWrapper>
      </BoxWrapper>
    </NoStyleLink>
  );
}