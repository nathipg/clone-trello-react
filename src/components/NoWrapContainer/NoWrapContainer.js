import React from 'react';
import styled from 'styled-components';

const NoWrapContainer = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
);

const NoWrapContainerStyled = styled(NoWrapContainer)`
  display: flex;
`;

export default NoWrapContainerStyled;