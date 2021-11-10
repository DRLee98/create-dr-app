import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const LayoutContainer = styled.div``;

interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <LayoutContainer>
      <Nav />
      {children}
    </LayoutContainer>
  );
}

export default Layout;
