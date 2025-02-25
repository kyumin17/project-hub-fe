import styled from 'styled-components';
import FilterButton from './FilterButton';
import SearchBox from './SearchBox';
import TypeMenu from './TypeMenu';
import { useState } from 'react';
import TagFilterButton from '../../../component/tag/TagFilterButton';

const SubBarWrapper = styled.div`
  margin: 0 9vw;
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
  const [techList, setTechList] = useState([]);

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
        <TagFilterButton techList={techList} setTechList={setTechList} />
      </BottomBar>
    </SubBarWrapper>
  );
}