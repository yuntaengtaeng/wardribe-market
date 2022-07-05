import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  PRIMARY,
  SECONDARY,
  BLACK,
  LIGHT_GRAY,
  WHITE,
} from '../../constants/color';

export const BUTTON_THEME = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  BLACK: 'black',
  LIGHT_GRAY: 'light_gray',
};

const handleBackgroundColorType = (color) => {
  switch (color) {
    case 'secondary':
      return SECONDARY;
    case 'black':
      return BLACK;
    case 'light_gray':
      return LIGHT_GRAY;
    default:
      return PRIMARY;
  }
};

const StyledButton = styled.button`
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
  color: ${({ theme }) => (theme === 'light_gray' ? BLACK : WHITE)};
  background-color: ${({ theme }) => handleBackgroundColorType(theme)};
  border-color: ${({ theme }) => handleBackgroundColorType(theme)};
  :disabled {
    opacity: 0.4;
  }
  :active {
    opacity: 0.9;
  }
`;

const Button = ({ children, type, theme, ...props }) => {
  return (
    <StyledButton type={type} theme={theme} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  theme: PropTypes.oneOf(Object.values(BUTTON_THEME)),
};

Button.defaultProps = {
  theme: BUTTON_THEME.PRIMARY,
};

export default Button;
