import React from 'react';
import GlobalStyle from '../../theme/GlobalStyle';
import Header from '../../components/Header/Header';

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;