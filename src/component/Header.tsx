import styled from 'styled-components';
import NoStyleLink from '../style/LinkStyle';

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

  &:hover {
    color: black;
  }
`;

// 나중에 이미지로 변경
const UserButton = styled.div`
  height: 28px;
  width: 28px;
  border-radius: 1rem;
  background-color: #D9D9D9;
  line-height: 25px;
  text-align: center;
`;

export default function Header() {
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
          </MenuButton>
        </NoStyleLink>
        <UserButton>
          u
        </UserButton>
      </MenuBar>
    </HeaderWrapper>
  );
}