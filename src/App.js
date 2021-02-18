import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import MenuButton from './components/Menu/MenuButton/MenuButton';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MenuButton icon={faTrello}>
        Quadros
      </MenuButton>
    </>
  );
}

export default App;