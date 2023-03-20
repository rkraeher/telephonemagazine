import { Icon, Navbar as Wrapper } from 'react-materialize';
import * as S from './Navbar.styles';

export const Navbar = () => {
  return (
    <Wrapper
      alignLinks='right'
      brand={<S.Home href='#'>telephone magazine</S.Home>}
      menuIcon={<Icon>menu</Icon>}
    >
      <S.NavItem href={`/contacts/1`}>About</S.NavItem>
      <S.NavItem href=''>Masthead</S.NavItem>
    </Wrapper>
  );
};
