import styled from 'styled-components';

interface TypeMenuButton {
  isselected: boolean;
};

const TypeMenuBar = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  font-weight: 700;
`;

const TypeMenuButton = styled.div<TypeMenuButton>`
  font-size: 1.2rem;
  cursor: pointer;
  color: ${(props) => (props.isselected ? 'black' : '#BCBCBC')};

  &:hover {
    color: black;
  }
`;

export default function TypeMenu({ typeFilter, setTypeFilter }) {
  return (
    <TypeMenuBar>
      <TypeMenuButton onClick={() => {setTypeFilter('all')}} isselected={typeFilter === 'all'}>
        전체
      </TypeMenuButton>
      <TypeMenuButton onClick={() => {setTypeFilter('project')}} isselected={typeFilter === 'project'}>
        프로젝트
      </TypeMenuButton>
      <TypeMenuButton onClick={() => {setTypeFilter('study')}} isselected={typeFilter === 'study'}>
        스터디
      </TypeMenuButton>
    </TypeMenuBar>
  );
}