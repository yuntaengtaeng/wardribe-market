import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LIGHT_GRAY, WHITE, BLACK } from '../../../constants/color';

const StyledOutLineButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: 1px solid;
  cursor: pointer;
  touch-action: manipulation;
  height: 2rem;
  padding: 0.25rem 1rem;
  font-size: 0.9rem;
  border-radius: 0.125rem;
  color: ${BLACK};
  background-color: ${WHITE};
  border-color: ${LIGHT_GRAY};
  :disabled {
    opacity: 0.4;
  }
  :active {
    opacity: 0.9;
  }
`;

const OutLineButton = ({ children, type, theme, ...props }) => {
  return (
    <StyledOutLineButton type={type} theme={theme} {...props}>
      {children}
    </StyledOutLineButton>
  );
};

OutLineButton.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default OutLineButton;
