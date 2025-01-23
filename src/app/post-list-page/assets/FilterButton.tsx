import styled from 'styled-components';

interface FilterButtonProps {
  isactive: boolean;
};

const FilterButtonWrapper = styled.div<FilterButtonProps>`
  border: 1px solid #626262;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 0.85rem;
  background-color: ${(props) => (props.isactive ? '#E64B4B' : 'white')};
  color: ${(props) => (props.isactive ? 'white' : '#626262')};
  cursor: pointer;
`;

export default function FilterButton({ label, isActive, setIsActive }) {
  return (
    <FilterButtonWrapper onClick={() => {setIsActive(!isActive)}} isactive={isActive}>
      {label}
    </FilterButtonWrapper>
  );
}