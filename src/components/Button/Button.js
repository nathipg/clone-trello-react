import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ className, children, icon }) => (
  <button className={className}>
    <span className="icon">
      <FontAwesomeIcon icon={icon} />
    </span>
    <span className="text">{children}</span>
  </button>
);

const StyledButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px 0 0;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  & > span {
    padding: 5px;
  }

  & > .icon {
    font-size: 15px;
  }

  & > .text {
    font-size: 14px;
    font-weight: bold;
    display: ${props => props.children ? 'inline' : 'none'}
  }
`;

export default StyledButton;