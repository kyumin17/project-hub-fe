import styled from 'styled-components';
import Tag from '../tag/Tag';
import NoStyleLink from '../../styles/LinkStyle';

const PostWrapper = styled.div`
  padding: 13px 13px 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  border: 1px solid #e3e3e3;
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

const Title = styled.div`
  font-weight: 500;
  font-size: 0.95rem;
  line-height: 1rem;
`;

const RecruitNumber = styled.span`
  color: #E64B4B;
`;

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 20px;
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
        <Title>
          {data.title}
          &nbsp;&nbsp;
          <RecruitNumber>
            {data.current_recruit}/{data.total_recruit === 0 ? '~' : data.total_recruit}
          </RecruitNumber>
        </Title>
        <TagWrapper>
          {data.tags.map((label: string) => {
            return <Tag label={label}></Tag>;
          })}
        </TagWrapper>
      </PostWrapper>
    </NoStyleLink>
  );
}