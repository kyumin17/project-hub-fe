import styled from 'styled-components';
import Header from '../../component/Header';
import TagFilterButton from '../../component/TagFilterButton';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import usePost from '../../hooks/usePost';
import AlertBox from '../../component/AlertBox';

interface TypeProps {
  isselect: boolean;
};

const PostCreatePageWrapper = styled.div`
  padding: 0 6vw;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 25px;

  .label {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;

const SelectType = styled.div`
  display: flex;
  gap: 20px;
`;

const Type = styled.div<TypeProps>`
  color: ${(props) => (props.isselect ? 'black' : '#BCBCBC')};
  cursor: pointer;
`;

const InputTitle = styled.input`
  padding: 0;
  color: #E64B4B;
  
  &::placeholder {
    color: #BCBCBC;
  }
`;

const SelectDetail = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
`;

const SelectNumber = styled.input`
  background-color: #F5F5F5;
  width: 2rem;
  padding: 8px 10px;
  border-radius: 4px;
  font-weight: 600;
  text-align: center;
  font-size: 1rem;

  &::placeholder {
    color: #626262;
  }
`;

const WritingArea = styled.textarea`
  resize: none;
  height: 45vh;
  width: 100%;
  border: none;
  background-color: #F5F5F5;
  border-radius: 7px;
  padding: 1rem 1.2rem;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

const RegisterButton = styled.button`
  background-color: #E64B4B;
  color: white;
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
        <PostInfo>
          <SelectType>
            <Type className='label' isselect={postType === '프로젝트'} onClick={() => {setPostType('프로젝트')}}>
              프로젝트
            </Type>
            <Type className='label' isselect={postType === '스터디'} onClick={() => {setPostType('스터디')}}>
              스터디
            </Type>
          </SelectType>
          <InputTitle  className='label' type='text' placeholder='제목을 입력하세요' spellCheck='false' ref={titleRef} />
          <SelectDetail>
            <div className='label'>사용기술</div>
            <TagFilterButton techList={techList} setTechList={setTechList} />
          </SelectDetail>
          <SelectDetail>
            <div className='label'>모집인원</div>
            <SelectNumber type='text' placeholder='미정' ref={recruitNumRef} />
          </SelectDetail>
        </PostInfo>
        <WritingArea placeholder='자신의 프로젝트를 소개해 주세요' spellCheck='false' ref={contentRef} />
        <RegisterButton onClick={useRegister}>
          등록하기
        </RegisterButton>
      </PostCreatePageWrapper>
      <AlertBox text='모집글이 등록되었습니다' type='success' isShow={isSuccessShow} setIsShow={setIsSuccessShow} />
      <AlertBox text={errorText} type='error' isShow={isErrorShow} setIsShow={setIsErrorShow} />
    </>
  );
}