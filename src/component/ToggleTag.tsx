import styled from 'styled-components';
import { useState } from 'react';

interface TagWrapperProps {
  isactive: boolean;
};

const TagWrapper = styled.div<TagWrapperProps>`
  background-color: ${(props) => (props.isactive ? '#E9F6FF' : '#F5F5F5')};
  color: ${(props) => (props.isactive ? '#3E7BFF' : '#8D8D8D')};
  display: inline;
  padding: 1.5px 5px;
  border-radius: 3px;
  cursor: pointer;
`;

export default function ToggleTag({ label, techList, setTechList }) {
  const [isActive, setIsActive] = useState(false);

  function activateTag() {
    setIsActive(!isActive);
    setTechList([...techList, label]);
  }

  return (
    <TagWrapper isactive={isActive} onClick={activateTag}>
      {label}
    </TagWrapper>
  );
}