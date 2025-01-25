import styled from 'styled-components';

interface BoxWrapperProps {
  isRead: boolean;
};

export const BoxWrapper = styled.div<BoxWrapperProps>`
  border-bottom: 1px solid #D9D9D9;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: ${(props) => (props.isRead ? '#FCFCFC' : 'white')};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  div {
    font-size: 1rem;
  }
`;

export const PostType = styled.div`
  color: #8D8D8D;
  font-weight: 600;
  margin-right: 7px;
`;

export const PostTitle = styled.div`
  font-weight: 600;
  margin-right: 2px;
`;