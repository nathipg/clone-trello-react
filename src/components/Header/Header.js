import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import NoWrapContainer from '../NoWrapContainer/NoWrapContainer';

import { faHome, faTh, faPlus, faInfoCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

const Header = ({className}) => {
  return (
    <header className={className}>
      <NoWrapContainer>
        <Button icon={faTh} />
        <Button icon={faHome} hiddenXs={true} />
        <Button icon={faTrello}>Quadros</Button>
      </NoWrapContainer>
      <Logo />
      <NoWrapContainer>
        <Button icon={faPlus} />
        <Button icon={faInfoCircle} />
        <Button icon={faBell} />
        <Button img="https://raw.githubusercontent.com/nathipg/clone-trello-react/main/src/assets/images/profile-pic.jpg" />
      </NoWrapContainer>
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