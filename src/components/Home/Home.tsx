import telegraphSchematicImage from 'images/telegraph-schematic.svg';
import * as S from './Home.styles';

export const Home = () => {
  return (
    <S.Container>
      <S.Title>Issue 1 coming soon</S.Title>
      <S.Diagram
        src={telegraphSchematicImage}
        alt='image of a telegraphic schematic'
      />
    </S.Container>
  );
};
