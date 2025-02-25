import styled from 'styled-components';
import { useState, useEffect } from 'react';

const SkeletonPostWrapper = styled.div`
  padding: 13px 13px 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 4px;
  border: 1px solid #e3e3e3;
`;

const Header = styled.div`
  background-color: #f3f3f3;
  height: 0.5rem;
  width: 8rem;
  border-radius: 3px;
`;

const Body = styled.div`
  background-color: #f3f3f3;
  height: 0.7rem;
  width: 15rem;
  border-radius: 3px;
`;

const Bottom = styled.div`
  background-color: #f3f3f3;
  height: 17px;
  width: 6rem;
  border-radius: 3px;
`;

export default function SkeletonPostList() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 200);
  }, []);

  return (
    <>
      {isShow && Array.from({length: 10} , (_, i) => i).map((i) => {
        return (
          <SkeletonPostWrapper key={i}>
            <Header>
            </Header>
            <Body>
            </Body>
            <Bottom>
            </Bottom>
          </SkeletonPostWrapper>
        );
      })}
    </>
  );
}