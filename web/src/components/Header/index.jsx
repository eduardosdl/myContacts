import logo from '../../assets/image/logo.svg';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo My Contacts" width="201" />
    </Container>
  );
}
