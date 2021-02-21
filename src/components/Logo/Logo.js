import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/images/logo.gif';

const Logo = ({className}) => {
  return(
    <div className={className}>
      <img src={logo} alt="Trello" />
    </div>
  );
};

const StyledLogo = styled(Logo)`
  display: inline-flex;

  & > img {
    width: 80px;
    height: 16px;
    margin: 7px 0;
    position: relative;
    opacity: .5;
  }
`;

export default StyledLogo;