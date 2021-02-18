import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuButton = ({ className, children, icon }) => (
  <button className={className}>
    <span className="icon">
      <FontAwesomeIcon icon={icon} />
    </span>
    <span className="text">{children}</span>
  </button>
);

const StyledMenuButton = styled(MenuButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px 0 0;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 3px;
  font-weight: bold;
  color: white;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  & > span {
    padding: 5px;
  }

  & > .icon {
    font-size: 18px;
  }

  & > .text {
    font-size: 14px;
    display: ${props => props.children ? 'inline' : 'none'}
  }
`;

export default StyledMenuButton;