import styled from 'styled-components';
import { Label, Body } from '../style/MyPageStyle';
import Post from '../../../component/post/Post';
import { useState } from 'react';
import { PostProps } from '../../../types/post';

interface ActivityBodyProps {
  isshow: boolean;
};

const Activity = styled.div`
  &:first-child {
    margin-bottom: 30px;
  }
`;

const ActivityHeader = styled.div`
  font-size: 0.95rem;
  margin-bottom: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ActivityBody = styled.div<ActivityBodyProps>`
  display: ${(props) => (props.isshow ? 'flex' : 'none')};
  flex-direction: column;
  gap: 10px;
`;

const DownIcon = styled.img`
  height: 15px;
`;

export default function MyActivity({ writeList, joinList }) {
  const [isWriteShow, setIsWriteShow] = useState(true);
  const [isJoinShow, setIsJoinShow] = useState(true);

  return (
    <div>
      <Label>
        내 활동
      </Label>
      <Body>
        <Activity>
          <ActivityHeader onClick={() => {setIsWriteShow(!isWriteShow)}}>
            <div>작성한 모집 글 ({writeList.length})</div>
            <DownIcon src={isWriteShow ? '/img/down-icon.png' : '/img/up-icon.png'} alt='' />
          </ActivityHeader>
          <ActivityBody isshow={isWriteShow}>
            {writeList && writeList.map((data: PostProps[]) => {
              return <Post data={data} />;
            })}
          </ActivityBody>
        </Activity>
        <Activity>
          <ActivityHeader onClick={() => {setIsJoinShow(!isJoinShow)}}>
            <div>참여한 모임 ({joinList.length})</div>
            <DownIcon src={isJoinShow ? '/img/down-icon.png' : '/img/up-icon.png'} alt='' />
          </ActivityHeader>
          <ActivityBody isshow={isJoinShow}>
            {joinList && joinList.map((data: PostProps[]) => {
              return <Post data={data} />;
            })}
          </ActivityBody>
        </Activity>
      </Body>
    </div>
  );
}