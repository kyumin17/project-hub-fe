import styled from 'styled-components';
import { useState } from 'react';
import data from '../data/tag_img_path.json';

interface TagWrapperProps {
  isactive: boolean;
};

const TagWrapper = styled.div<TagWrapperProps>`
  background-color: ${(props) => (props.isactive ? '#E9F6FF' : '#F5F5F5')};
  color: ${(props) => (props.isactive ? '#3E7BFF' : '#8D8D8D')};
  padding: 1.5px 5px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  padding: 3px 8px 3px 4px;
  align-items: center;
  gap: 8px;
`;

const TagIcon = styled.img`
  height: 18px;
`;

export default function ToggleTag({ label, techList, setTechList }) {
  const [isActive, setIsActive] = useState(false);
  const path = `/img/tag/${data[label].path}`;

  function activateTag() {
    setIsActive(!isActive);
    setTechList([...techList, label]);
  }

  return (
    <TagWrapper isactive={isActive} onClick={activateTag}>
      <TagIcon src={path} alt='' />
      {label}
    </TagWrapper>
  );
}