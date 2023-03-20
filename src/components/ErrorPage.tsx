import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { Container, Text } from './ErrorPage.styles';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <Container>
      <>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {error && isRouteErrorResponse(error) ? (
          <Text>
            {error.status} {error.statusText}
          </Text>
        ) : (
          <Text>{'Unknown Error'}</Text>
        )}
      </>
    </Container>
  );
};
