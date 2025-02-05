import styled from 'styled-components';
import { useEffect } from 'react';

interface AlertBoxWrapperProps {
  isshow: boolean;
  type: 'success' | 'error';
};

const AlertBoxWrapper = styled.div<AlertBoxWrapperProps>`
  background-color: ${(props) => (props.type === 'success' ? '#4DAF51' : '#F50000')};
  color: white;
  text-align: black;
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: 4px;
  padding: 11px 30px 11px 25px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
  display: ${(props) => (props.isshow ? 'flex' : 'none')};
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img`
  height: 20px;
`;

export default function AlertBox({ text, type, isShow, setIsShow }) {
  useEffect(() => {
    setTimeout(() => {setIsShow(false)}, 800);
  }, [isShow]);

  return (
    <AlertBoxWrapper isshow={isShow} type={type}>
      <Icon src={type === 'success' ? '/img/check-icon.png' : '/img/alert-icon.png'} alt='' />
      <div>{text}</div>
    </AlertBoxWrapper>
  );
}