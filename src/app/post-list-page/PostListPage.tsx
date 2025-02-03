import styled from 'styled-components';
import { useState } from 'react';
import Header from '../../component/Header';
import Post from '../../component/Post';
import SubBar from './assets/SubBar';
import Pagination from './assets/Pagination';
import useFetch from '../../hooks/useFetch';
import { PostProps } from '../../types/post';

const PostList = styled.div`
  padding: 1rem 6vw 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2.5rem 0;
`;

export default function PostListPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const {data: postList, loading, error} = useFetch(`/post?page=${currentPage}`);
  
  return (
    <>
      <Header />
      <SubBar />
      <PostList>
        {postList && postList.map((data: PostProps) => {
          return <Post key={data.id} data={data} />;
        })}
      </PostList>
      <PaginationWrapper>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </PaginationWrapper>
    </>
  );
}