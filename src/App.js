import React from 'react';
import GlobalStyle from './theme/GlobalStyle';
import Button from './components/Button/Button';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Button icon={faTrello}>
        Quadros
      </Button>
    </>
  );
}

export default App;