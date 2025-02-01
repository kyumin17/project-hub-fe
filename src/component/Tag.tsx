import styled from 'styled-components';

const TagWrapper = styled.div`
  background-color: #E9F6FF;
  color: #3E7BFF;
  display: inline;
  padding: 1.5px 5px;
  border-radius: 3px;
`;

export default function Tag({ label }) {
  return (
    <TagWrapper>
      {label}
    </TagWrapper>
  );
}