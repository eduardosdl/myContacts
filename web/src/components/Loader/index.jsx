import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay } from './styles';
import Spinner from '../Spinner';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  let container = document.getElementById('loader-root');

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', 'loader-root');
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Spinner size={72} />
    </Overlay>,
    container
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
