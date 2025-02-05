import styled from 'styled-components';
import NoStyleLink from '../styles/LinkStyle';
import UserMenu from './UserMenu';
import useFetch from '../hooks/useFetch';
import useAuth from '../hooks/useAuth';
import { useState } from 'react';

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 1.5rem 5vw;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
`;

const MenuBar = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 4vw;
  gap: 20px;
`;

const MenuButton = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: #959595;
  cursor: pointer;
  position: relative;

  &:hover {
    color: black;
  }
`;

const Badge = styled.div`
  background-color: #F50000;
  color: white;
  font-weight: 500;
  font-size: 0.7rem;
  height: 0.95rem;
  width: 0.95rem;
  border-radius: 10px;
  text-align: center;
  line-height: 1.05rem;
  position: absolute;
  right: -0.8rem;
  top: -0.45rem;
  border: 2px solid white;
`;

export default function Header() {
  const { user } = useAuth();
  const {data, loading, error} = useFetch(user ? `/users/${user.id}` : null);
  const badgeNumber = data && data.unread_count;

  return (
    <HeaderWrapper>
      <NoStyleLink to='/'>
        <Logo>
          로고
        </Logo>
      </NoStyleLink>
      <MenuBar>
        <NoStyleLink to='/write'>
          <MenuButton>
            글 작성
          </MenuButton>
        </NoStyleLink>
        <NoStyleLink to='/notify'>
          <MenuButton>
            알림
            {badgeNumber && <Badge>{badgeNumber}</Badge>}
          </MenuButton>
        </NoStyleLink>
        <UserMenu />
      </MenuBar>
    </HeaderWrapper>
  );
}