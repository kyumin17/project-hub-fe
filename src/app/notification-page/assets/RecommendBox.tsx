import styled from 'styled-components';
import Tag from '../../../component/Tag';
import { BoxWrapper, Content, PostType, PostTitle } from '../style/BoxStyle';
import NoStyleLink from '../../../style/LinkStyle';

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #626262;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-box: wrap;
  gap: 15px;
`;

export default function RecommendBox({ data }) {
  return (
    <NoStyleLink to={`/post/${data.post_id}`}>
      <BoxWrapper isRead={data.is_read}>
        <Title>
          추천
        </Title>
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
            return <Tag label={label}></Tag>;
          })}
        </TagWrapper>
      </BoxWrapper>
    </NoStyleLink>
  );
}