import React from 'react';
import GlobalStyle from '../../theme/GlobalStyle';
import Button from '../../components/Button/Button';
import { faHome, faTh } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <Button icon={faTh} />
      <Button icon={faHome} />
      <Button icon={faTrello}>Quadros</Button>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;