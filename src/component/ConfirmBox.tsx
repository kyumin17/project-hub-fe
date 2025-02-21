import styled from 'styled-components';
import { toggleShowProps } from '../types/common';

const ConfirmBoxWrapper = styled.div<toggleShowProps>`
  background-color: white;
  border: 1px solid #8D8D8D;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
  min-width: 21rem;
  padding: 12px 16px;
  height: 5.2rem;
  z-index: 1;
  box-shadow: 1px 5px 5px #d2d2d2;
  display: ${(props) => (props.isshow ? 'inherit' : 'none')};
`;

const Title = styled.div`
  font-size: 1.05rem;
  font-weight: 500;
`;

const Detail = styled.div`
  color: #626262;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 15px;
  display: flex;
  gap: 12px;
  bottom: 12px;
`;

const CancelButton = styled.button`
  background-color: #F5F5F5;
  color: #626262;
  padding: 4px 15px;
  border-radius: 3px;
`;

const ConfirmButton = styled.button`
  background-color: #E64B4B;
  color: white;
  padding: 4px 15px;
  border-radius: 3px;
`;

export default function ConfirmBox({ title, detail, accept, isShow, setIsShow }) {
  function confirm() {
    setIsShow(false);
    accept();
  }

  return (
    <ConfirmBoxWrapper isshow={isShow}>
      <Title>
        {title}
      </Title>
      <Detail>
        {detail}
      </Detail>
      <ButtonWrapper>
        <CancelButton onClick={() => {setIsShow(false)}}>
          취소
        </CancelButton>
        <ConfirmButton onClick={confirm}>
          확인
        </ConfirmButton>
      </ButtonWrapper>
    </ConfirmBoxWrapper>
  );
}