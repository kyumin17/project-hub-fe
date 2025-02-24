import styled from 'styled-components';
import ConfirmBox from '../../../component/ConfirmBox';
import AlertBox from '../../../component/AlertBox';
import usePost from '../../../hooks/usePost'
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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

export default function RegisterButtonBox({ titleRef, content, recruitNumRef, postType, techList }) {
  const navigate = useNavigate();
  const [isSuccessShow, setIsSuccessShow] = useState(false);
  const [isErrorShow, setIsErrorShow] = useState(false);
  const [isConfirmShow, setIsConfirmShow] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [form, setForm] = useState(null);
  const { user } = useAuth();

  function cancelWriting() {
    navigate('/');
  }

  async function useRegister() {
    const title = titleRef.current.value;
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
      author: user.name,
      author_id: user.id,
      tags: techList,
      total_recruit: recruitNum,
      current_recruit: 0,
      content: content,
      comments: []
    });

    setIsSuccessShow(true);
    setTimeout(() => {navigate('/')}, 800);
  };

  usePost('/post', form);

  return (
    <>
      <div>
        <RegisterButton onClick={useRegister}>
          등록하기
        </RegisterButton>
        <CancelButton onClick={() => {setIsConfirmShow(true)}}>
          취소하기
        </CancelButton>
      </div>
      <AlertBox text='모집글이 등록되었습니다' type='success' isShow={isSuccessShow} setIsShow={setIsSuccessShow} />
      <AlertBox text={errorText} type='error' isShow={isErrorShow} setIsShow={setIsErrorShow} />
      <ConfirmBox
        title='글 작성을 취소하시겠습니까?'
        detail='작성된 내용이 모두 삭제됩니다'
        accept={cancelWriting}
        isShow={isConfirmShow}
        setIsShow={setIsConfirmShow}
      />
    </>
  );
}