import styled from 'styled-components';
import { useState } from 'react';
import NoStyleLink from '../styles/LinkStyle';
import useAuth from '../hooks/useAuth';

interface UserMenuWrapperProps {
  isshow: boolean;
};

const Wrapper = styled.div`
  position: relative;
`;

const UserButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: #D9D9D9;
  line-height: 25px;
  text-align: center;
`;

const UserMenuWrapper = styled.div<UserMenuWrapperProps>`
  display: ${(props) => (props.isshow ? 'inherit' : 'none')};
  position: absolute;
  right: 0;
  border: 1px solid #8D8D8D;
  border-radius: 4px;
  min-width: 15rem;
  background-color: white;
  z-index: 1;
  padding: 1rem 1.2rem;
  margin-top: 15px;
`;

const UserMenuHeader = styled.div`
  display: flex;
  gap: 15px;
`;

const UserIcon = styled.div`
  background-color: #D9D9D9;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  text-align: center;
  line-height: 3.5rem;
`;

const UserInfo = styled.div`
  margin: auto 0;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
`;

const UserEmail = styled.div`
  color: #8D8D8D;
  font-size: 0.95rem;
`;

const UserMenuBody = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Menu = styled.div`
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    font-weight: 500;
  }
`;

export default function UserMenu() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserButton onClick={() => {setIsMenuShow(!isMenuShow)}}>
        u
      </UserButton>
      <UserMenuWrapper isshow={isMenuShow}>
        <UserMenuHeader>
          <UserIcon>
            u
          </UserIcon>
          <UserInfo>
            <UserName>
              {user && user.name}
            </UserName>
            <UserEmail>
              {user && user.email}
            </UserEmail>
          </UserInfo>
        </UserMenuHeader>
        <UserMenuBody>
          <NoStyleLink to='/my'>
            <Menu>마이페이지</Menu>
          </NoStyleLink>
          <Menu>로그아웃</Menu>
        </UserMenuBody>
      </UserMenuWrapper>
    </Wrapper>
  );
}