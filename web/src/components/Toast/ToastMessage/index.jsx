import PropTypes from 'prop-types';

import xCircleIcon from '../../../assets/image/icons/x-circle.svg';
import checkCircleIcon from '../../../assets/image/icons/check-circle.svg';

import { Container } from './styles';

export default function ToastMessage({ text, type }) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={xCircleIcon} alt="x" />}
      {type === 'success' && <img src={checkCircleIcon} alt="check" />}
      <strong>{text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
