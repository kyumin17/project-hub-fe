import styled from 'styled-components';
import tagData from '../data/tag_style.json';
import colorData from '../data/tag_color.json';

const TagWrapper = styled.div`
  display: flex;
  padding: 3px 8px 3px 4px;
  border-radius: 3px;
  align-items: center;
  gap: 8px;
`;

const TagIcon = styled.img`
  height: 15px;
`;

export default function Tag({ label }) {
  const path = `/img/tag/${tagData[label].path}`;
  const color = tagData[label].color;

  return (
    <TagWrapper style={{color: colorData[color].color, backgroundColor: colorData[color].bgcolor}}>
      <TagIcon src={path} alt='' />
      {label}
    </TagWrapper>
  );
}