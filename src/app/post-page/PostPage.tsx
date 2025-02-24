import styled from 'styled-components';
import Header from '../../component/Header';
import Tag from '../../component/Tag';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import DOMPurify from 'dompurify';

const PostPageWrapper = styled.div`
  padding: 0 9vw;
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 2rem;
`;

const Main = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  div {
    font-size: 1.3rem;
  }
`;

const PostType = styled.div`
  font-weight: 700;
  color: #8D8D8D;
`;

const PostTitle = styled.div`
  font-weight: 700;
  max-width: 50vw;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const RecruitNumber = styled.div`
  color: #E64B4B;
`;

const Author = styled.div`
  color: #626262;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const PostContent = styled.div`
  font-size: 1rem;
  min-height: 50vh;
`;

const RegisterButton = styled.button`
  background-color: #E64B4B;
  color: white;
  padding: 7px 15px;
  border-radius: 3px;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const RegisterComment = styled.div`
  background-color: #F5F5F5;
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
`;

const CommentInput = styled.textarea`
  background: transparent;
  padding: 15px;
  width: 80vw;
  border: none;
  resize: none;
  height: 1.2rem;
  line-height: 1.2rem;

  &:focus {
    outline: none;
  }
`;

const EnrollButton = styled.button`
  background-color: black;
  color: white;
  position: absolute;
  right: 8px;
  padding: 7px 28px;
  border-radius: 4px;
`;

export default function PostPage() {
  const postId = useParams().post_id;
  const [isRegisterShow, setIsRegisterShow] = useState(false);

  const {data: post, loading, error} = useFetch(`/post/${postId}`);

  async function enroll() {
    //등록
  }

  return (
    <>
      <Header></Header>
      <PostPageWrapper>
        {post && <PostHeader>
          <Main>
            <PostType>
              {post.type}
            </PostType>
            <PostTitle>
              {post.title}
            </PostTitle>
            <RecruitNumber>
              {post.current_recruit}/{post.total_recruit}
            </RecruitNumber>
          </Main>
          <Author>
            {post.author}
          </Author>
          <TagWrapper>
            {post.tags.map((tag: string) => {
              return <Tag label={tag} key={tag} />;
            })}
          </TagWrapper>
        </PostHeader>}
        {post && <PostContent dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(post.content),
        }}>
        </PostContent>
        }
        <RegisterButton onClick={() => {setIsRegisterShow(!isRegisterShow)}}>
          지원하기
        </RegisterButton>
        {isRegisterShow && <RegisterComment>
          <CommentInput defaultValue='지원합니다!' />
          <EnrollButton onClick={enroll}>
            등록
          </EnrollButton>
        </RegisterComment>}
      </PostPageWrapper>
    </>
  );
}