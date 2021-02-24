import React from 'react';
import styled from 'styled-components';

import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import { faHome, faTh, faPlus, faInfoCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

const Header = ({className}) => {
  return (
    <header className={className}>
      <div>
        <Button icon={faTh} />
        <Button icon={faHome} hiddenXs={true} />
        <Button icon={faTrello}>Quadros</Button>
      </div>
      <Logo />
      <div>
        <Button icon={faPlus} />
        <Button icon={faInfoCircle} />
        <Button icon={faBell} />
      </div>
    </header>
  );
};

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #026aa7;
  padding: 4px;
`;

export default StyledHeader;