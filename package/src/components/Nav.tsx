import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  padding: 10px 20px;
  a + a {
    margin-left: 10px;
  }
`;

interface INavItem {
  path: string;
  text: string;
}

function Nav() {
  const navItems: INavItem[] = [
    { path: '/', text: 'home' },
    { path: '/profile', text: 'profile' }
  ];
  return (
    <NavContainer>
      {navItems.map((item) => (
        <Link key={`nav_${item.path}`} to={item.path}>
          {item.text}
        </Link>
      ))}
    </NavContainer>
  );
}

export default Nav;
