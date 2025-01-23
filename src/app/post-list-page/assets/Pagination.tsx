import styled from 'styled-components';
import { useEffect, useState } from 'react';
import http from '../../../api/http';

interface PaginationWrapperProps {
  isshow: boolean;
};

interface PageButtonProps {
  isselected: boolean;
};

const PaginationWrapper = styled.div<PaginationWrapperProps>`
  display: ${(props) => (props.isshow ? 'flex' : 'none')};
`;

const PageButton = styled.div<PageButtonProps>`
  font-weight: ${(props) => (props.isselected ? 600 : 400)};
  font-size: 1rem;
  color: ${(props) => (props.isselected ? 'black' : '#8D8D8D')};
  cursor: pointer;
  padding: 10px;
`;

export default function Pagination({ currentPage, setCurrentPage }) {
  const [totalPage, setTotalPage] = useState(1);
  const pageList = Array.from({ length: totalPage }, (_, index) => index + 1);

  useEffect(() => {
    const fetchTotalPage = async() => {
      try {
        const res = await http.get('/total_page');
        setTotalPage(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTotalPage();
  }, []);

  return (
    <PaginationWrapper isshow={totalPage !== 1}>
      {pageList.map((page) => {
        return (
          <PageButton key={page} isselected={page === currentPage} onClick={() => {setCurrentPage(page)}}>
            {page}
          </PageButton>
        );
      })}
    </PaginationWrapper>
  );
}