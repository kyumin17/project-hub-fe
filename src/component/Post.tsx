import styled from 'styled-components';
import Tag from './Tag';
import NoStyleLink from '../style/LinkStyle';

const PostWrapper = styled.div`
  border: 0.5px solid #828282;
  padding: 13px 13px 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PostHeader = styled.div`
  display: flex;
  gap: 3px;
  line-height: 1rem;
  color: #8D8D8D;
`;

const Type = styled.div`
  font-weight: 700;
`;

const Author = styled.div`
  color: #626262;
  font-size: 0.85rem;
`;

const PostBody = styled.div`
  display: flex;
  line-height: 1rem;
  gap: 5px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 0.95rem;
`;

const RecruitNumber = styled.div`
  color: #E64B4B;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export default function Post({ data }) {
  return (
    <NoStyleLink to={`/post/${data.id}`}>
      <PostWrapper>
        <PostHeader>
          <Type>
            {data.type}
          </Type>
          <div>·</div>
          <Author>
            {data.author}
          </Author>
        </PostHeader>
        <PostBody>
          <Title>
            {data.title}
          </Title>
          <RecruitNumber>
            {data.current_recruit}/{data.total_recruit}
          </RecruitNumber>
        </PostBody>
        <TagWrapper>
          {data.tags.map((label: string) => {
            return <Tag label={label}></Tag>;
          })}
        </TagWrapper>
      </PostWrapper>
    </NoStyleLink>
  );
}