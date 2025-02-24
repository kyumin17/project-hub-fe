import styled from 'styled-components';
import Header from '../../component/Header';
import { useState, useRef } from 'react';
import PostInfoBox from './assets/PostInfoBox';
import WritingBox from './assets/WritingBox';
import RegisterButtonBox from './assets/RegisterButtonBox';
import { ToggleSelectProps } from '../../types/common';

const PostCreatePageWrapper = styled.div`
  padding: 0 9vw;
`;

const SelectType = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 8px;
`;

const Type = styled.div<ToggleSelectProps>`
  color: ${(props) => (props.isselect ? 'black' : '#BCBCBC')};
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
`;

const InputTitle = styled.input`
  padding: 12px 0;
  box-sizing: border-box;
  font-size: 1.1rem;
  width: 100%;
  font-weight: 500;
  border-bottom: 1px solid #d4d4d4;
  
  &::placeholder {
    color: #BCBCBC;
  }
`;

export default function PostCreatePage() {
  const [postType, setPostType] = useState('프로젝트');
  const [techList, setTechList] = useState([]);
  const [content, setContent] = useState('');

  const titleRef = useRef(null);
  const recruitNumRef = useRef(null);

  return (
    <>
      <Header />
      <PostCreatePageWrapper>
        <SelectType>
          <Type isselect={postType === '프로젝트'} onClick={() => {setPostType('프로젝트')}}>
            프로젝트
          </Type>
          <Type isselect={postType === '스터디'} onClick={() => {setPostType('스터디')}}>
            스터디
          </Type>
        </SelectType>
        <InputTitle type='text' placeholder='제목을 입력하세요' spellCheck='false' ref={titleRef} />
        <PostInfoBox techList={techList} setTechList={setTechList} recruitNumRef={recruitNumRef} />
        <WritingBox setContent={setContent} />
        <RegisterButtonBox 
          titleRef={titleRef} 
          content={content}
          recruitNumRef={recruitNumRef} 
          postType={postType}
          techList={techList}
        />
      </PostCreatePageWrapper>
    </>
  );
}