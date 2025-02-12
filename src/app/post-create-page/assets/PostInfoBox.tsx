import styled from 'styled-components';
import TagFilterButton from '../../../component/TagFilterButton';

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #d4d4d4;

  .label {
    font-size: 1rem;
    font-weight: 500;
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
  padding: 5px 8px;
  border-radius: 4px;
  text-align: center;

  &::placeholder {
    color: #626262;
  }
`;

export default function PostInfoBox({ techList, setTechList, recruitNumRef }) {
  return (
    <PostInfo>
      <SelectDetail>
        <div className='label'>모집인원</div>
        <SelectNumber type='text' placeholder='미정' ref={recruitNumRef} />
      </SelectDetail>
      <SelectDetail>
        <div className='label'>기술스택</div>
        <TagFilterButton techList={techList} setTechList={setTechList} />
      </SelectDetail>
    </PostInfo>
  );
}