import styled from 'styled-components';

const SearchBoxWrapper = styled.div`
  border: 1.5px solid #BCBCBC;
  border-radius: 2rem;
  height: 2rem;
  width: 14rem;
  position: relative;
  display: flex;
  align-items: center;
`;

const InputArea = styled.input`
  border: none;
  outline: none;
  background: transparent;
  height: 1.7rem;
  width: 11rem;
  padding: 0 12px;
`;

const SearchIcon = styled.img`
  height: 17px;
  position: absolute;
  right: 10px;
`;

export default function SearchBox() {
  return (
    <SearchBoxWrapper>
      <InputArea type='text' spellCheck='false' placeholder='검색어를 입력하세요' />
      <SearchIcon src='/img/search-icon.png' alt='' />
    </SearchBoxWrapper>
  );
}