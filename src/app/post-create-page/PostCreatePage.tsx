import styled from 'styled-components';
import Header from '../../component/Header';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import AlertBox from '../../component/AlertBox';
import PostInfoBox from './assets/PostInfoBox';
import TagFilterButton from '../../component/TagFilterButton';

interface TypeProps {
  isselect: boolean;
};

const PostCreatePageWrapper = styled.div`
  padding: 0 9vw;
`;

const SelectType = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 8px;
`;

const Type = styled.div<TypeProps>`
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

const WritingArea = styled.textarea`
  resize: none;
  height: 45vh;
  width: 100%;
  border: none;
  padding: 15px 0;
  box-sizing: border-box;
  font-size: 0.95rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #BCBCBC;
  }
`;

const RegisterButton = styled.button`
  background-color: #E64B4B;
  color: white;
  padding: 7px 25px;
  border-radius: 3px;
  margin-top: 25px;
  margin-right: 20px;
`;

const CancelButton = styled.button`
  background-color: #F5F5F5;
  color: #8D8D8D;
  padding: 7px 25px;
  border-radius: 3px;
  margin-top: 25px;
`;

export default function PostCreatePage() {
  const [postType, setPostType] = useState('프로젝트');
  const navigate = useNavigate();
  const [techList, setTechList] = useState([]);
  const [form, setForm] = useState(null);
  const [isSuccessShow, setIsSuccessShow] = useState(false);
  const [isErrorShow, setIsErrorShow] = useState(false);
  const [errorText, setErrorText] = useState(null);

  const titleRef = useRef(null);
  const recruitNumRef = useRef(null);
  const contentRef = useRef(null);

  usePost('/post', form);

  async function useRegister() {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    let recruitNum = recruitNumRef.current.value;

    if (!title || !content) {
      setIsErrorShow(true);
      setErrorText('모든 칸을 채워주세요');
      return;
    }

    if (!recruitNum) {
      recruitNum = 0;
    }

    if (recruitNum < 0) {
      setIsErrorShow(true);
      setErrorText('모집 인원의 형식이 적절하지 않습니다');
      return;
    }

    setForm({
      type: postType,
      title: title,
      author: 'name',
      author_id: '0212',
      tags: techList,
      total_recruit: recruitNum,
      current_recruit: 0,
      content: content,
      comments: []
    });

    setIsSuccessShow(true);
    setTimeout(() => {navigate('/')}, 800);
  }

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
        <WritingArea placeholder='자신의 프로젝트를 소개해 주세요' spellCheck='false' ref={contentRef} />
        <div>
          <RegisterButton onClick={useRegister}>
            등록하기
          </RegisterButton>
          <CancelButton>
            취소하기
          </CancelButton>
        </div>
      </PostCreatePageWrapper>
      <AlertBox text='모집글이 등록되었습니다' type='success' isShow={isSuccessShow} setIsShow={setIsSuccessShow} />
      <AlertBox text={errorText} type='error' isShow={isErrorShow} setIsShow={setIsErrorShow} />
    </>
  );
}