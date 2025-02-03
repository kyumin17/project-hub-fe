import styled from 'styled-components';
import useFetch from '../../../hooks/useFetch';
import { useState } from 'react';

interface PaginationWrapperProps {
  isshow: boolean;
};

interface PageButtonProps {
  isselected: boolean;
};

interface PageMoveButtonProps {
  isshow: boolean;
}

const PaginationWrapper = styled.div<PaginationWrapperProps>`
  display: ${(props) => (props.isshow ? 'flex' : 'none')};
  align-items: center;
`;

const PageButton = styled.div<PageButtonProps>`
  font-size: 1rem;
  color: ${(props) => (props.isselected ? 'white' : '#626262')};
  background-color: ${(props) => (props.isselected ? '#E64B4B' : '')};
  border-radius: 1rem;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  margin: 6px;
`;

const PageMoveButton = styled.div<PageMoveButtonProps>`
  font-size: 0.7rem;
  padding: 15px;
  cursor: pointer;
  color: #585858;
  display: ${(props) => (props.isshow ? 'inherit' : 'none')};

  &:hover {
    color: black;
  }
`;

export default function Pagination({ currentPage, setCurrentPage }) {
  const {data: totalPage, loading, error} = useFetch('/total_page');
  const [basePage, setBasePage] = useState(1);
  const [isPrevShow, setIsPrevShow] = useState(false);
  const [isNextShow, setIsNextShow] = useState(true);
  const paginationLimit = 7;
  const pageList = Array.from({ length: Math.min(totalPage, paginationLimit) }, (_, index) => index + basePage);

  function updatePageButtonShow(nextBasePage: number) {
    setIsPrevShow(true);
    setIsNextShow(true);

    if (nextBasePage === 1) {
      setIsPrevShow(false);
    }

    if (nextBasePage === totalPage - paginationLimit + 1) {
      setIsNextShow(false);
    }
  }

  function updatePage(page: number, basePage: number) {
    setCurrentPage(page);
    setBasePage(basePage);
    updatePageButtonShow(basePage);
    document.documentElement.scrollTop = 0;
  }

  function goPrevPage() {
    const nextBasePage = Math.max(1, basePage - paginationLimit);
    updatePage(nextBasePage, nextBasePage);
  }

  function gonextBasePage() {
    const nextBasePage = Math.min(totalPage - paginationLimit + 1, basePage + paginationLimit);
    updatePage(nextBasePage, nextBasePage);
  }

  function changePage(page: number) {
    const halfPage = Math.floor(paginationLimit / 2);
    let nextBasePage: number = page - halfPage;

    if (page >= totalPage - halfPage) {
      nextBasePage = totalPage - paginationLimit + 1;
    } else if (page <= halfPage + 1) {
      nextBasePage = 1;
    }

    updatePage(page, nextBasePage);
  }

  return (
    <PaginationWrapper isshow={totalPage !== 1}>
      <PageMoveButton isshow={isPrevShow} onClick={goPrevPage}>
        ◀
      </PageMoveButton>
      {pageList.map((page) => {
        return (
          <PageButton key={page} isselected={page === currentPage} onClick={() => {changePage(page)}}>
            {page}
          </PageButton>
        );
      })}
      <PageMoveButton isshow={isNextShow} onClick={gonextBasePage}>
        ▶
      </PageMoveButton>
    </PaginationWrapper>
  );
}