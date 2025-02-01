import styled from 'styled-components';
import { useState } from 'react';
import data from '../data/tech.json';
import ToggleTag from './ToggleTag';
import Tag from './Tag';

interface OptionBoxProps {
  isshow: boolean;
};

interface OptionTypeProps {
  isselect: boolean;
};

const Wrapper = styled.div`
  position: relative;
`;

const TagFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const TagFilterButtonWrapper = styled.button`
  border: 1px solid #626262;
  display: flex;
  gap: 6px;
  align-items: center;
  padding: 6px 10px;
  border-radius: 4px;
`;

const Label = styled.p`
  padding: 0;
  margin: 0;
  color: #626262;
  font-size: 0.85rem;
`;

const DownIcon = styled.img`
  height: 14px;
`;

const OptionBox = styled.div<OptionBoxProps>`
  position: absolute;
  display: ${(props) => (props.isshow ? 'inherit' : 'none')};
  width: 30rem;
  background-color: white;
  margin-top: 15px;
  padding: 1rem;
  border: 1px solid #8D8D8D;
  border-radius: 4px;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px 20px;
`;

const OptionTypeWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const OptionType = styled.div<OptionTypeProps>`
  font-weight: 600;
  color: ${(props) => (props.isselect ? 'black' : '#BCBCBC')};
  cursor: pointer;
`;

export default function TagFilterButton({ techList, setTechList }) {
  const [isOptionShow, setIsOptionShow] = useState(false);
  const optionTypeList = ['프로그래밍 언어', '프론트엔드', '백엔드', '앱', '인공지능', '게임', '보안'];
  const [selectType, setSelectType] = useState('프로그래밍 언어');

  const [techOptions, setTechOptions] = useState(data.programming_language);

  function select(type: string) {
    setSelectType(type);

    if (type === '프로그래밍 언어') {
      setTechOptions(data.programming_language);
    } else if (type === '프론트엔드') {
      setTechOptions(data.frontend);
    } else if (type === '백엔드') {
      setTechOptions(data.backend);
    } else if (type === '앱') {
      setTechOptions(data.mobile);
    } else if (type === '인공지능') {
      setTechOptions(data.ml_dl);
    } else if (type === '게임') {
      setTechOptions(data.game);
    } else if (type === '보안') {
      setTechOptions(data.security);
    }
  }

  return (
    <Wrapper>
      <TagFilterWrapper>
        <TagFilterButtonWrapper onClick={() => {setIsOptionShow(!isOptionShow)}}>
          <Label>기술 선택</Label>
          <DownIcon src='/img/down-icon.png' alt='more' />
        </TagFilterButtonWrapper>
        {techList && techList.map((tech) => {
          return <Tag label={tech} />;
        })}
      </TagFilterWrapper>
      <OptionBox isshow={isOptionShow}>
        <OptionTypeWrapper>
          {optionTypeList.map((type) => {
            return (
            <OptionType isselect={selectType === type} onClick={() => {select(type)}}>
              {type}
            </OptionType>);
          })}
        </OptionTypeWrapper>
        <OptionWrapper>
          {techOptions.map((tech) => {
            return <ToggleTag key={tech} label={tech} techList={techList} setTechList={setTechList} />;
          })}
        </OptionWrapper>
      </OptionBox>
    </Wrapper>
  );
}