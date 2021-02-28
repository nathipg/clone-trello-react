import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ className, children, icon, img }) => {
  let content = null;

  if(icon) {
    content = 
      <span className="icon">
        <FontAwesomeIcon icon={icon} />
      </span>;
  }
  
  if(img) {
    content = <span className="img"></span>;
  }

  return (
    <button className={className}>
      {content}
      <span className="text">{children}</span>
    </button>
  );
};

const StyledButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px 0 0;
  background: ${props => props.img ? 'none' : 'rgba(255, 255, 255, 0.3)'};
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  padding: ${props => props.img ? '0' : '1.5px 4px'};
  min-width: 32px;
  min-height: 32px;

  &:hover {
    background: ${props => props.img ? 'none' : 'rgba(255, 255, 255, 0.2)'};
  }

  &:focus {
    outline: none;
  }

  &:active {
    background: ${props => props.img ? 'none' : 'rgba(255, 255, 255, 0.1)'};
  }

  & > span {
    padding: 5px;
  }

  & > .icon {
    font-size: 14px;
  }

  & > .img {
    background-image: url(${props => props.img});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 32px;
    width: 32px;
    border-radius: 100%;
    padding: 0;
  }

  & > .text {
    font-size: 14px;
    font-weight: bold;
    display: none;

    @media(min-width: 740px) {
      display: ${props => props.children ? 'inline' : 'none'};
    }
  }

  @media(max-width: 740px) {
    display: ${props => props.hiddenXs ? 'none' : 'inline-flex'};
  }
`;

export default StyledButton;