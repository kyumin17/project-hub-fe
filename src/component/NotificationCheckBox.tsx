import styled from 'styled-components';

const CheckBoxLabel = styled.label`
  color: #626262;
  font-size: 0.8rem;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const CheckBoxInput = styled.input`
  margin-left: 0;
  margin-right: 8px;
`;

export default function NotificationCheckBox() {
  return (
    <CheckBoxLabel>
      <CheckBoxInput type='checkbox' />
      이메일로 내가 관심있어 할 만한 모집글에 대한 알람을 받습니다
    </CheckBoxLabel>
  );
}