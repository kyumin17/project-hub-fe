import styled from 'styled-components';
import data from '../data/tag_img_path.json';

const TagWrapper = styled.div`
  display: flex;
  padding: 3px 8px 3px 4px;
  border-radius: 3px;
  align-items: center;
  gap: 8px;
  border: 1px solid #bebebe;
`;

const TagIcon = styled.img`
  height: 18px;
`;

export default function Tag({ label }) {
  const path = `/img/tag/${data[label].path}`;

  return (
    <TagWrapper>
      <TagIcon src={path} alt='' />
      {label}
    </TagWrapper>
  );
}