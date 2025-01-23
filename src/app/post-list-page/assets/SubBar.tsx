import styled from 'styled-components';
import FilterButton from './FilterButton';
import SearchBox from './SearchBox';
import TypeMenu from './TypeMenu';
import { useState } from 'react';

const SubBarWrapper = styled.div`
  margin: 0 6vw;
`;

const TopBar = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 10px;
`;

const SearchBoxWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const BottomBar = styled.div`
  display: flex;
  gap: 14px;
`;

export default function SubBar() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [isRecruiting, setIsRecruiting] = useState(true);
  const [isMyTech, setIsMyTech] = useState(false);

  return (
    <SubBarWrapper>
      <TopBar>
        <TypeMenu typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
        <SearchBoxWrapper>
          <SearchBox />
        </SearchBoxWrapper>
      </TopBar>
      <BottomBar>
        <FilterButton label='모집 중' isActive={isRecruiting} setIsActive={setIsRecruiting} />
        <FilterButton label='내 기술' isActive={isMyTech} setIsActive={setIsMyTech} />
      </BottomBar>
    </SubBarWrapper>
  );
}