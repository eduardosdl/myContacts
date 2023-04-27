import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import { StyledButton } from './styles';

export default function Button({ type, disabled, isLoading, onClick, children }) {
  return (
    <StyledButton type={type} disabled={disabled || isLoading} onClick={onClick}>
      {isLoading ? <Spinner size={16} /> : children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  isLoading: false,
  onClick: undefined,
};
