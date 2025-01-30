import styled from 'styled-components';
import { useState } from 'react';

interface OptionWrapperProps {
  isshow: boolean;
};

interface OptionProps {
  isselect: boolean;
};

const EmailSelectButtonWrapper = styled.button`
  padding: 0;
`;

const SelectEmailType = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DownImage = styled.img`
  height: 14px;
`;

const OptionWrapper = styled.div<OptionWrapperProps>`
  position: absolute;
  display: ${(props) => (props.isshow ? 'inherit' : 'none')};
  margin-top: 15px;
  border: 1px solid #c0c0c0;
  border-radius: 3px;
  width: 12rem;
  z-index: 1;
`;

const Option = styled.div<OptionProps>`
  text-align: left;
  padding: 5px 12px;
  background-color: ${(props) => (props.isselect ? '#EDEDED' : 'white')};

  &:hover {
    background-color: #EDEDED;
  }
`;

export default function EmailSelectButton() {
  const [emailType, setEmailType] = useState('gmail.com');
  const [isOptionShow, setIsOptionShow] = useState(false);
  const emailTypeList = ['gmail.com', 'sogang.ac.kr', 'icloud.com', 'outlook.com', 'naver.com', 'daum.net'];

  return (
    <EmailSelectButtonWrapper onClick={() => {setIsOptionShow(!isOptionShow)}}>
      <SelectEmailType>
        <div>@{emailType}</div>
        <DownImage src='/img/down-icon.png' alt='more' />
      </SelectEmailType>
      <OptionWrapper isshow={isOptionShow}>
        {emailTypeList.map((type) => {
          return (
            <Option key={type} onClick={() => {setEmailType(type)}} isselect={type === emailType}>
              {type}
            </Option>
          );
        })}
      </OptionWrapper>
    </EmailSelectButtonWrapper>
  );
}