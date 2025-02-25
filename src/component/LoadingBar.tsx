import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { toggleShowProps } from '../types/common';

const LoadingImg = styled.img<toggleShowProps>`
  position: absolute;
  left: 50vw;
  top: 50vh;
  height: 150px;
  transform: translate(-50%, -50%);
  display: ${(props) => (props.isshow ? 'inherit' : 'none')};
`;

export default function LoadingBar() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 200);
  }, []);

  return (
    <LoadingImg src='/img/loading.gif' isshow={isShow} />
  );
}