import { Icon } from 'react-materialize';
import * as S from './Navbar.styles';

export const Navbar = () => {
  return (
    <header>
      <S.Container
        alignLinks='right'
        brand={<S.Home href={`/`}>telephone magazine</S.Home>}
        menuIcon={<Icon>menu</Icon>}
      >
        <S.Link href={`/about`}>About</S.Link>
        <S.Link href='/masthead'>Masthead</S.Link>
        {/* Add a Submissions route */}
        <S.Link href='#'>Submissions</S.Link>
      </S.Container>
    </header>
  );
};
