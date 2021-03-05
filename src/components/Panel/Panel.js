import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Panel = ({ className, children, title, close }) => {
  return (
    <section className={className}>
      <header>
        <FontAwesomeIcon icon={faTimes} className="hidden" />
        <h1>{title}</h1>
        <FontAwesomeIcon icon={faTimes} className="icon-close" onClick={close} />
      </header>
      {children}
    </section>
  );
};

const StyledPanel = styled(Panel)`
  display: ${props => props.show ? 'block' : 'none'};
  margin-left: ${props => props.align === 'right' ? 'auto' : 0}; 
  margin-right: ${props => props.align === 'left' ? 'auto' : 0};
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 8px 16px -4px rgba(8, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.1);
  margin: 4px;
  width: 400px;//fit-content;

  header {
    display: ${props => !props.title ? 'none' : 'flex'};
    align-items: center;
    color: #5e6c84;
    margin: 0 12px;
    border-bottom: 1px solid rgba(9, 30, 66, 0.15);

    .hidden {
      margin-right: auto;
      visibility: hidden;
    }

    h1 {
      font-size: 14px;
      font-weight: normal;
      margin: 10.5px 0;
    }

    .icon-close {
      margin-left: auto;
      cursor: pointer;
    }
  }
`;

export default StyledPanel;